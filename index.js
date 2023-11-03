const express = require("express");
const exp = require('constants');
const app = express();
const port = 5500;
const host = "localhost";
const data = require('./database/data.js');

app.use(express.urlencoded({extended:false}));
//Standartrouting für statische Dateien
app.use(express.static("./src/public"));
app.use(express.static("./src/public/css"));
app.use(express.static("./src/public/img"));
app.use(express.static("./src/public/js"));
app.use(express.static("./database"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/" ,function(req,res){
    res.render("home", data);
});

app.get("/list", function(req, res){
    res.render("list", data);
});

app.get("/forms", function(req, res){
    res.render("forms", data);
});

app.post("/forms", function(req, res){
    data.addApplication(req.body);
    res.render("forms", data);
});

app.use(function (req, res){
    res.status(404);
    res.render("404");
  });

app.listen(port, host , () => {
    console.log(`Server läuft auf ${host}:${port}`);
}
    );