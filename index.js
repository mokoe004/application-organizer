const express = require("express");
const exp = require('constants');
const app = express();
const port = 5500;
const host = "localhost";
const data = require('./database/data.js');

app.use(express.urlencoded({extended:false}));
//Standartrouting für statische Dateien
app.use(express.static("./src/public"));
app.use(express.static("./database"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/" ,function(req,res){
    res.render("layout", data);
});

app.get("/home", function(req, res){
    res.render("home", data);
});

app.use(function (req, res){
    res.status(404);
    // res.redirect("404");
  });

app.listen(port, host , () => {
    console.log(`Server läuft auf ${host}:${port}`);
}
    );