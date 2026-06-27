
const nongoose = require("mongoose");
require("dotenv").config();


function connectToDB(){
    nongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Server is connected to DB")
    })
    .catch(err =>{
        console.log(err)
        process.exit(1);
    })
}

module.exports = connectToDB;