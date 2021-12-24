import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { routes } from './routes';

const port = process.env.PORT || 3333

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);



app.listen(3333, () => {
 console.log(`Server start at port: 3333`);
});