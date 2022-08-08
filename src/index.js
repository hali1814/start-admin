import express from 'express'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import path from 'path'
import { engine as handlebars } from 'express-handlebars'
import connectAllRouter from '../src/router/index.js'
import mongoose from 'mongoose'

//root sever, port
const app = express();
const port = 3000;

//morgan
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// get path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//set engine handlebars
app.engine('hbs', handlebars({
    defaultLayout: 'main', extname: '.hbs', 
    helpers: {
        foo(number) { return number + 1; },
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    
      }
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


//Logger HTTP 
// app.use(morgan('combined'))

//static 
app.use(express.static(path.join(__dirname, 'public')))

//router
connectAllRouter(app)



//connect mongoose
mongoose.connect('mongodb+srv://hao:123@cluster0.awb35tc.mongodb.net/Node?retryWrites=true&w=majority'
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connect to MongoDB')
    })
    .catch(err => {
        console.log('connect to MongoDB failed', err)
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
