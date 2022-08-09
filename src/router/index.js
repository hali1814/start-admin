
import loginRouter from "./login-router.js"
import gameRouter from "./game-router.js"
import productRouter from "./product-router.js"
import apiRouter from "./api.js"


const connectAllRouter= (app) => {
    
    app.use("/login", loginRouter)

    app.use("/product", productRouter)

    app.use("/game", gameRouter)

    
    app.use("/api", apiRouter)

    app.get('/', (req, res) => {
        res.redirect('/login')
    })
}

export default connectAllRouter;