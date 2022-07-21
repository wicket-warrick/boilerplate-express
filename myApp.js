let express = require('express');
let app = express();
const path = require("path");


const absPath = path.join(__dirname, "./views/index.html");



const handler=(req,res)=>{
  res.sendFile(absPath)
}
app.get('/',handler)































 module.exports = app;
