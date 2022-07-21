let express = require('express');
let app = express();
const path = require("path");


const absPath = path.join(__dirname, "./views/index.html");

const handler=(req,res)=>{
  res.sendFile(absPath)
}
app.use("/public", express.static(__dirname + "/public"));





app.get('/',handler)
app.get("/json",function (req,res){
  res.json({"message":"continuamos aprendendo"})
})





























 module.exports = app;
