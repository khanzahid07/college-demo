import express from "express";
import { createReadStream } from "node:fs";
let app = express();

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
  res.writeHead(200, { "content-type": "text/html" });
  let myReadStream = createReadStream("./index.html", "utf-8");
  myReadStream.pipe(res);
});

app.get("/stream/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Streaming file with ID: ${id}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
