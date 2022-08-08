import gameModel from "../model/game.js";
import loginModel from "../model/login-model.js";

const getScore = async () => {
    const instance = await gameModel.find({});
    return instance;
}

const addScore = async (score) => {
    const p = new gameModel(score);
    await p.save();
    return true;
}

const checkLogin = async (username) => {
    const instance = await loginModel.find({ user: username });
    return instance[0];
}

const register = async (user) => {
    const p = new loginModel(user);
    await p.save();
    return true;
}



export { getScore, checkLogin, register, addScore };