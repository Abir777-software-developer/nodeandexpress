//http modulek
const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("hello guys");
  } else {
    res.end(`
    <h1>Oops</h1>
    <p>we cant seem to fing the page</p>
    <a href='/'>back home</a>`);
    //   res.write("welcome to our home page");
    //   res.end();
  }
});

server.listen(5000);
