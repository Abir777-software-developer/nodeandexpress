const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.all("*", (req, res) => {
  res.send("kllll");
  res.status(404).send("jkkk");
}); //all means that what ever  enpoint the request hit same response will be given to those endpoints
app.listen(5000, () => {
  console.log("server is listening");
});
