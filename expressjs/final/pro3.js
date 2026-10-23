const express = require("express");
const path = require("path");
const app = express();

//setting up static and middleware
app.use(express.static("./public")); //in node js servers we have to make request for each of the fiiles like styles,html file everything to get access on it in express we can serv the static file in public so that thiose can be accessed

//app.get('/',(req,res)=>{
//  res.sendFile(path.join(__dirname),'./navbar-app/index.html')
//})//sending the file to this path

app.all("*", (req, res) => {
  res.status(404).send("resources not found");
});
app.listen(5000, () => {
  console.log("server is listening");
});

//json-javascript object notation
