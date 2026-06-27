const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const app = express();
require("dotenv").config();
const connectToDB = require("./config/db");


app.set("view engine","ejs");

connectToDB();

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(3000,()=>{
    console.log("Server is Running:");
})