import { Application, Request, Response } from "express"
import cors from "cors";
import express from 'express'
import { userRoutes } from "./user/UserRoutes";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello War!!!!!!!!!!!!!')
})

// app.post('/', (req: Request, res: Response) => {
//     console.log(req.body);
//     res.json({
//         message: "successfully re"
//     })
// })

export default app;