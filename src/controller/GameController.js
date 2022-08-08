import { checkLogin, register, addScore as addScoreService, getScore as getScoreService } from "../service/game.js";


//[POST] /game/login/:username/:password
const checkLoginGame = async (req, res) => {
    const { username, password } = req.params;

    const data = await checkLogin(username)
    if (data) {
        if (data.password === password) {
            res.json({ error : false });
        } else {
            res.json({ error : true });
        }
    }
}


//[POST] /register/login/:username/:password
const registerUser = async (req, res) => {
    const { username, password } = req.params;

    const data = await register({user: username, password});
    if (data) {
        res.json({ error : false });
    }

    
}

//[POST] /game/list-score
const addScore = async (req, res) => {
    const { name, score } = req.params;
    const addScore = await addScoreService({ name, score });
    if (addScore) {
        res.json({ error : false });
    }

}

//[GET] /game/list-score
const getScore = async (req, res) => {
    const list = await getScoreService();

    if (list) {
        res.json(list);
    }else {
        res.json({ error : true });
    }

}



export { checkLoginGame, addScore, getScore, registerUser };