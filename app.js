import express from "express";
import { createReadStream } from "node:fs";

let app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("request received" + req.url);
});

app.get("/api", (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });

  const myObj = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  };

  res.end(JSON.stringify(myObj));
});

app.get("/file", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

app.get("/stream", (req, res) => {
  res.sendFile("./what.html", { root: "." });
});

app.get("/stream/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Streaming file with ID: ${id}`);
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
