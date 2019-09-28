const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');    // Configuring the database
const mongoose = require('mongoose');
const route = require('./app/routes/routes.js');
var cors = require('cors')

const app = express();


app.use(cors()) // For cross origin resource sharing
 
// parse requests of content-type - application/json
app.use(bodyParser.json())

 
 
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
/* Creating a simple server route */
app.get('/',(req,res)=>{
    res.send('Server listening for request')
})

//Import routes
route(app)
 

/* Listen to Port  8000*/
app.set('port', process.env.PORT || 8000);

const port = app.get('port')

app.listen(port,()=>{
    console.log('Server Running')
})