let express = require('express');
let app = express();
const path = require("path");


const absPath = path.join(__dirname, "./views/index.html");

const handler=(req,res)=>{
  res.sendFile(absPath)
}
app.use("/public", express.static(__dirname + "/public"));





app.get('/',handler)
app.get("/json",(request,response)=>{
if(process.env.MESSAGE_STYLE==='uppercase'){
  response.json({"message":"HELLO JSON"})
  
}else{
  response.json({"message":"hello json"})
}
})





























 module.exports = app;
