var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("resume");
});

app.get("/form",function(req,res){
	res.render("form");
});

app.post("/newresume",function(req,res){
	var data =req.body;
	console.log(data);
	res.render("cv",{data: data});
})

app.listen(3000,function(){
	console.log("server running on port 3000");
});