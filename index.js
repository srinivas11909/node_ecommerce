const express = require("express");
const mongoose = require("mongoose");
var secret = require('./config/secret');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//add routes here
var categoryRoutes = require('./routes/categories');
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use(categoryRoutes)





//connect to mongodb atlasian

mongoose.connect(secret.database, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected successfully to db");
}).catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
})

app.listen(secret.port, () => {
    console.log("Connection started");
})