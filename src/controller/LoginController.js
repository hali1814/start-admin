import { checkLogin as checkLoginService } from "../service/login-service.js";
//[GET] /login
const pageLogin = (req, res) => {
    res.render('login', { layout : false })
}


//[POST] /login
const checkLogin = async (req, res) => {
    const { username, password } = req.body;

    const data = await checkLoginService(username)
    if (data) {
        if (data.password === password) {
            res.redirect('/product')
        } else {
            res.redirect('/login')
        }
    }

    res.render('login', { layout : false })
}


export { pageLogin, checkLogin };