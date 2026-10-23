//event loop - event loop is a special feature which is handle all the operations in js effircintly

const { readFile, writeFile } = require("fs");

console.log("started a first task");
// CHECK FILE PATH!!!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");

// here as both the functions are synchronous i.e immadiate operations so it will ge texecuted in order
