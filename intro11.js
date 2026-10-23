//event driven problems - for iamginary gui for server
//here as in noemal js we use onclick,onchange here we use eventemitter
const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on("response", (name, age) => {
  console.log(`hello ${name}${age}`);
});
customEmitter.on("response", () => {
  console.log("hii");
});

customEmitter.emit("response", "abir", 22);
//there can be multiple events also with same event name but idf same event name then we have to emit at once.the order of aon and emit should not disturb

//we can use server like this also  and here server is emitting the events behind the scenes
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("welcome");
});
server.listen(5000);
