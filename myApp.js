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
  const jsonResponse={"message":"hello json"}
if(process.env.MESSAGE_STYLE === 'uppercase'){
 jsonResponse.message=jsonResponse.message.toUpperCase()
  
}
  response.json(jsonResponse)

})





























 module.exports = app;
