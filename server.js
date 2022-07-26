var express=require('express');
var app=express();
var router=require('./router');

var bodyParser=require('body-parser');
//middle ware configuration
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//passsing an instance of express to router
router(app);
//starting server
app.listen(7000);
console.log("server started at port no 7000");