import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";
const app = express();

app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
} as any);

contactEmail.verify((error) => {
  if (error) console.log(error);
  else console.log("Ready to Send");
});

app.post("/contact", async (req, res) => {
  const { firstName, lastName } = req.body;
  const { email, message, phone } = req.body;

  const name = firstName + lastName;

  const mail = {
    from: name,
    to: "diogojorge1401@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);

    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    res.json(error);
  }
});

app.listen(5000, () => console.log("Server Running"));