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
  if(process.env.MESSAGE_STYLE==='uppercase'){
    res.json({"message":"HELLO JSON"})
  }else{
    res.json({"message":"Hello json"})
  }
})





























 module.exports = app;
