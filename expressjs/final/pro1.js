//http modules
const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbarapp/index.html"); //it will be called only one time but the problem is only the text and button will appear with no styling and functionalites so we have to make request for the js file and css file
const homestyles = readFileSync("./navbarapp/browser.js");
const homelogic = readFileSync("./navbarapp/styles.css");
const server = http.createServer((req, res) => {
  // console.log(req);//request object

  const url = req.url;
  if (url === "/") {
    //   console.log("user hit the server");
    res.writeHead(200, { "content-type": "text/plain" }); //giving the metadata abou the response
    //res.end("home page");//it sends signal to server that all data has been sent
    res.write(homePage); //gives the content of index.html
    res.end();
    //about
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" }); //giving the metadata abou the response
    res.end("<h1>ab</h1>");
  }
  //styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" }); //giving the metadata abou the response
    res.write(homestyles);
    res.end();
  }
  //logic
  else if (url === "/browser.js") {
    res.writeHead(200, { "content-type": "text/javascript" }); //giving the metadata abou the response
    res.write(homelogic);
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" }); //giving the metadata abou the response
    res.end("<h1>page not found</h1>");
  }
});
server.listen(5000);
