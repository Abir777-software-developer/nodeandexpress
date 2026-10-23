const logger = (req, res, next) => {
  //middleware func , next is used to pass to next middleware and it is must
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

module.exports = logger;
