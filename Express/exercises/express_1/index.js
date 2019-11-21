const express = require("express");
const app = express();
const users = require("./data.json");

app.get("/", (req, res) => {
  res.send("Welcome!");
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/users/:gender?", (req, res) => {
  const result = users.filter(user => user.gender === req.params.gender);

  result.length > 0
    ? res.send(result.map(v => v.name))
    : res.send("This type does not exists or check the input");
});
app.get("/users/nat/:nat?", (req, res) => {
  const result = users.filter(user => user.nat === req.params.nat);

  result.length > 0
    ? res.send(result.map(v => v.name))
    : res.send("This nationality does not exists or check the input");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
