const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<h1>Welcom World</h1>");
});

app.get("/user/:id", (req, res) => {
  res.json({ id: req.params.id, name: req.query.name });
});

app.post("/user", (req, res) => {
  res.json([req.body]);
});

app.listen(port, () => {
  console.log("Server running");
});
