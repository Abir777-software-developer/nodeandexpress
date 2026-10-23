const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  //res.json(products)
  res.send('<h1>home</h1><a href="/api/products">products</a>');
});
//lets say in /api/products we want limited data from products
app.get("/api/products", (req, res) => {
  // const newp=products.map((product)=>{
  //     const{id,name,image}=product
  //     return {id,name,image}
  // })

  //to get single product
  const singlepro = products.find((product) => product.id == 1);
  res.json(newp);
});
//Router params-getting that [rodut according to productID]
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singlepro = products.find((product) => product.id == Number(productID));
  if (!singlepro) {
    return res.status(404).send("not available");
  }
  return res.json(singlepro);
});

app.get("/api/products/:productID/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("hello");
});

//query String paramters-the route is /api/v1/query and with that qusery?name="john"&id=3
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedpro = [...products];
  // res.send('hello')
  if (search) {
    sortedpro = sortedpro.filter((product) => {
      product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedpro = sortedpro.slice(0, Number(limit));
  }
  if (sortedpro.length < 1) {
    // res.status(200).send("no")
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedpro);
});

app.listen(5000, () => {
  console.log("server is listening");
});

//json-javascript object notation
