const express = require('express');
const ejs = require('ejs');
const morgan  = require('morgan');
const bodyparser = require('body-parser');

const story = require('./controllers/story');
const port = process.env.PORT || 3000;
var app = express();

//middleware
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(story);

app.get('/',(req,res)=>{
	res.render('index');
});

app.listen(port,()=>{
	console.log("App started.");
});