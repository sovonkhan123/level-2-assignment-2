import { Application, Request, Response } from "express"
import cors from "cors";
import express from 'express'
import { userRoutes } from "./user/UserRoutes";
import { ordersRouter } from "./order/OrderRoutes";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/order', ordersRouter)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello War!!!!!!!!!!!!!')
})

app.all('*', (req: Request, res: Response)=> {
  res.status(400).json({
    success: false,
    message: 'route not found'
  });
});

export default app;