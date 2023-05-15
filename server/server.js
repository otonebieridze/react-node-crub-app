const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

app.use(bodyParser.json());

let data = JSON.parse(fs.readFileSync("./db/db.json"));

app.get("/", (req, res, next) => {
  res.send("Hello");
});

app.get("/users", (req, res, next) => {
  res.json(data);
});

app.post("/users", (req, res, next) => {
  const newUser = req.body;
  const newId = data[data.length - 1].id + 1;

  newUser.id = newId;
  data.push(newUser);

  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  res.json(newUser);
});

app.delete("/users/:id", (req, res, next) => {
  const id = req.params.id;
  const filteredUsers = data.filter((user) => user.id != id);
  data = filteredUsers;

  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  res.send("User deleted!");
});

app.put("/users/:id", (req, res, next) => {
  const id = req.params.id;
  const updatedUser = req.body;
  const index = data.findIndex((user) => user.id === id);

  data[index] = { ...updatedUser, id: id };

  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  res.send("User updated!");
});

app.listen(4001, () => console.log("App listening on port 4001"));
