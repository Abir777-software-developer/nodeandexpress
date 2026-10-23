//async-patterns
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    //here this nested loop will take time so many of us thinks that if any user navigate to about page will get blocked but thats the not case ,in the browser "about page" will be displayed same as while navugated oter pages but when we will navigate to about in the terninal the numvbetrs in loop will show up
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
