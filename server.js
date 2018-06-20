const express = require('express');
const ejs = require('ejs');
const morgan  = require('morgan');
const bodyparser = require('body-parser');
const passport = require('passport');

const {mongoose} = require('./database/db');
const story = require('./controllers/story');
const auth = require('./controllers/auth');
const port = process.env.PORT || 3000;
var app = express();

//passport config
require('./config/passport')(passport);


//middleware
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(story);
app.use(auth);

//routes
app.get('/',(req,res)=>{
	res.render('index');
});

app.get('/dashboard',(req,res)=>{
	res.render('Aaiye huzoor');
});

app.listen(port,()=>{
	console.log("App started.");
});