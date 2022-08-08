import loginModel from "../model/login-model.js";

const checkLogin = async (username) => {
    const instance = await loginModel.find({ user: username });
    return instance[0];
}



export { checkLogin };