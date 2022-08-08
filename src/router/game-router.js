import express from 'express';
import { checkLoginGame, addScore, getScore, registerUser } from '../controller/GameController.js';

const gameRouter = express.Router();


//[GET] /list-score
gameRouter.get("/list-score", getScore)

//[GET] /login/:username/:password
gameRouter.get("/login/:username/:password", checkLoginGame)

//[POST] /register/:username/:password
gameRouter.post("/register/:username/:password", registerUser)



//[POST] /score/:name/:score
gameRouter.post("/score/:name/:score", addScore)

export default gameRouter