//how to send data as chunks via server
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    }); //open event emitted once the file is successfully opened
    //pipe-is a method available on readable streams (like createReadStream).//It lets you automatically forward the data to a writable stream, such as a file or the HTTP response.

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
//similarly we hace createwritestream
