import express from "express";
import { createReadStream } from "node:fs";

let app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Zahid" });
});

app.get("/how", (req, res) => {
  res.render("how");
});

app.get("/what", (req, res) => {
  res.render("what");
});

app.get("/profile/:name", (req, res) => {
  const name = req.params.name;
  const data = {
    age: 30,
    occupation: "Software Engineer",
    from: "Afghanistan",
    hobbies: ["Reading", "Traveling", "Coding"],
  };
  res.render("profile", { name: name, data: data });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
