import express, { Express } from "express";
import dotenv from "dotenv";
import { I_Request_Custom , I_Response_Custom } from '@type'
import { morganMiddleware } from "./middlewares"

const NODE_ENV = process.env.NODE_ENV;
dotenv.config({path : `${__dirname}/env/${NODE_ENV}/.env.${NODE_ENV}`})
 
const app: Express = express();

app.use(morganMiddleware)
app.get("/", (req: I_Request_Custom, res: I_Response_Custom) => {
  res.send("Express + TypeScript Server");
});

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
});