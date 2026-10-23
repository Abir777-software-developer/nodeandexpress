//fs-filesystem module
//1st -synchronize
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8"); //read the context
const second = readFileSync("./content/sec.txt", "utf8"); //read the context of file
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result :${first},${second}`,
  { flag: "a" }
); //creating a file then writing it from first and sec and flag=a means appending the same line with itselft which we got from writefilesync
