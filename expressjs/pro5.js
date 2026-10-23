//middleware
const express = require("express");
const app = express();
const logger = require("./logger");
const autho = require("./authorize");

//also we can use thirdparty middleware like jwt

app.use(express.static.apply("/public")); //static is built in middleware

const logger = (req, res, next) => {
  //middleware func , next is used to pass to next middleware and it is must
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

//lets say i want to add this logger function in seperate file and want to insert it in this file because we can have multiple routes so there is sa way to add this middleware function in all the routes automatically by app.use()
app.get("/", logger, (req, res) => {
  res.send("Home");
}); //as the logger in sepertae file we arec 9importing here and automatically logger func will gtev executed and remember order mattres app.use must be at the top of all routes

//how to add the middleware in all routes(without manually adding)
app.use(logger); //will add automatically middleware to all the routes

app.use("/api", logger); //lets say you want to add the middleware to those whise url starting from api

app.get("/", logger, (req, res) => {
  //   const method = req.method;
  //   const url = req.url;
  //   const time = new Date().getFullYear();
  //   console.log(method, url, time);

  res.send("Home");
});

//now adding multiple middleware
app.use([logger, autho]); //adding multiple middleware and also here order mattres in midlewrae

app.get("/about", (req, res) => {
  res.send("About");
}); //we can do like app.get("/about",[logger,auth],(req,res))

app.listen(5000, () => {
  console.log("server is listening");
});
