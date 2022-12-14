import cors from "cors";
import express from "express";
import './emailProvider';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(5000, () => console.log("Server Running"));