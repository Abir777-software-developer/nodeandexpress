const express = require("express");
const app = express();

let { people } = require("./data");

//static assets
app.use(express.static("./method-public"));

app.use(express.urlencoded({ extended: false })); //middleware express.ulencoded build in middleware

app.post("/login", (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }

  res.status(401).send("plsss");
});

app.post("/api/people", (req, res) => {
  res.status(201).send("success");
});

app.use(express.json()); //middleware

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id,name);
  // res.send('hello')
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: "hhhhh" });
  }

  app.delete("/api/people/:id", (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
      return res.status(404).json({ success: false, msg: "hhhhh" });
    }
    const newp = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newp });
  });
});
app.get("/app/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.listen(5000, () => {
  console.log("server is listening");
});
