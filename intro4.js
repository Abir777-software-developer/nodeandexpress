//built in modules-os,path,fs,http....
//os module
const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//methodn rseturns the system uptime in sec
console.log(os.uptime());

const current = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(current);
