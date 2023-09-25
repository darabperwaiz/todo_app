// Require important module which used to run this project
const express = require('express');
const route = require('./route')
const port = process.env.PORT || 8000;

// Requiring MongoDb Connection
const db = require('./config/mongoose')

// Express App Functionality to app Variable
const app = express();

// Set Veiw Engine to Display ejs file to the browser
app.set('view engine', 'ejs');

// set location of views folder
app.set('views', './views')

// set for assets folder which is including all static file like css js images etc.
app.use(express.static('assets'));

// use for parse the incomming request
app.use(express.urlencoded())

// use for route
app.use('/', route)




// running server and check error
app.listen(port, function(err){
    if(err){
        console.log(`Server not Connected: ${err}`)
    }
    console.log(`Server is Running on Port: ${port}`)
})