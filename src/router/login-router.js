import express from 'express';
import { checkLogin, pageLogin } from '../controller/LoginController.js';

const loginRouter = express.Router();




//[GET] /login
loginRouter.get("/", pageLogin)

//[POST] /login
loginRouter.post("/", checkLogin)
export default loginRouter