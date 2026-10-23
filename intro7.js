//asynchronous
const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res); //gives the data in the file
  const first = res;
  readFile("./content/sec.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;
    writeFile(
      "./content/result-async.txt",
      `here is the result :${first},${second}`,
      { flag: "a" },
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
      }
    );
  });
});
