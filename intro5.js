//path module
const path = require("path");

console.log(path.sep); //seperator

const filePath = path.join("/content/", "intro5a", "test.txt"); //ans-\content\intro5a\test.txt
console.log(filePath);

const base = path.basename(filePath);
console.log(base); //ans-test.txt

const absolute = path.resolve(__dirname, "content", "intro5a", "test.txt");
console.log(absolute); //gives absolute path-E:\NodeAndExpress\content\intro5a\test.txt
