import { morgan_mid, session_mid } from "./"
import express , { Express } from "express";
import { cors_mid } from "./cors.middleware";

export const AppMiddleWaresInit = (app : Express)=>{
    app.use([
        morgan_mid,
        session_mid,
        cors_mid,
        express.json(),
    ])
}