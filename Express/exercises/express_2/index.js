const express = require("express");
const app = express();
var users = require("./data.json");
var path = require("path");

app.use(express.urlencoded());

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/users", (req, res) => {
  res.send(users);
});

/* app.get("/users", (req, res) => {
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
}); */
app.post("/users/add", (req, res) => {
  const newUser = {
    id: users.users.length + 1,
    fname: req.body.firstname,
    lname: req.body.lastname,
    country: req.body.country,
    message: req.body.subject
  };
  if (newUser) {
    users.users.push(newUser);
    res.send(users.users);
  }
});

app.delete("/users/delete/:id", (req, res) => {
  const idFromURL = req.params.id;
  const revisedArr = users.users.map(i => {
    if (i.id !== idFromURL) {
      return i;
    }
    return "deleted";
  });

  res.send(revisedArr);
});
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
