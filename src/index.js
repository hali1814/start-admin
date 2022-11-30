import express from 'express'
// import morgan from 'morgan'
import { fileURLToPath } from 'url'
import path from 'path'
import { engine as handlebars } from 'express-handlebars'
import connectAllRouter from '../src/router/index.js'
import mongoose from 'mongoose'
import http from 'http'
import debug from 'debug'

//root sever, port
const app = express();


//morgan
// app.use(morgan('dev'));
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
console.log(__dirname)
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


    var port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);
    
    /**
     * Create HTTP server.
     */
    
    var server = http.createServer(app);
    
    /**
     * Listen on provided port, on all network interfaces.
     */
    
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    
    /**
     * Normalize a port into a number, string, or false.
     */
    
    function normalizePort(val) {
      var port = parseInt(val, 10);
    
      if (isNaN(port)) {
        // named pipe
        return val;
      }
    
      if (port >= 0) {
        // port number
        return port;
      }
    
      return false;
    }
    
    /**
     * Event listener for HTTP server "error" event.
     */
    
    function onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }
    
      var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    }
    
    /**
     * Event listener for HTTP server "listening" event.
     */
    
    function onListening() {
      var addr = server.address();
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
      debug('Listening on ' + bind);
    }