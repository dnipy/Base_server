import { Router } from "express";
import { RequestBodyValidator } from "../../middlewares"
import Joi from '@hapi/joi'

const UserAddSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required()
});



const user_router = Router();

user_router.get('/',(req,res)=>{
    return res.json({method : 'get',route : '/'})
})

user_router.get('/:user_id',(req,res)=>{
    const {user_id} = req.params;
    const {param_id} = req.query;
    return res.json({method : 'get',user_id,param_id })
})

user_router.get('/',(req,res)=>{
    return res.json({method : 'get',route : '/'})
})

user_router.post('/add',RequestBodyValidator(UserAddSchema),(req,res)=>{
    const {email,password} = req.body;
    return res.json({method : 'post',email ,password})
})

export default user_router;