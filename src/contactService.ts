import { contactEmail } from './emailProvider';

export const getInTouchService = async ({
  firstName, lastName, email, message, phone
}) => {
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

  await contactEmail.sendMail(mail);
}