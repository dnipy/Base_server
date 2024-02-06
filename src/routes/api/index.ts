import { Router } from "express";
import user_router from "./user.routes";

const api_router = Router();

api_router.get('/',(req,res)=>res.json({method : 'get',route : `/api`}))
api_router.use('/user',user_router)

export default api_router