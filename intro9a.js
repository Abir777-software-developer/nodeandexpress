// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

//here the 1st and last two log sateements will get executed first then the settimeout one as settimeout is sa sasynchrounous func so event loop will executed it after all the immadiate operatons pretty much synchronous funcs gets completed
