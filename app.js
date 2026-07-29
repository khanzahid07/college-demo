// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Hello World");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

//we should write {createserver}

// import { createServer } from "http";

// const server = createServer((req, res) => {
//   console.log(`the request is on the ${req}`);
//   res.writeHead(200, { "content-type": "text/plain" });

//   res.end("hey world");
// });

// server.listen(3000, "127.0.0.8");
// console.log("yo dawgs , now listening to port 3000");

// import { createServer } from "http";

// const server = createServer((req, res) => {
//   console.log("request received");

//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("hey world");
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

//create readStream

// import { createReadStream } from "fs";

// const stream = createReadStream("./README.md", {
//   encoding: "utf-8",
// });

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => {
//   console.log("Finished reading file");
// });

// stream.on("error", (err) => {
//   console.log(err);
// });

import { createReadStream, createWriteStream } from "fs";

const stream = createReadStream("./README.md", {
  encoding: "utf-8",
});

const writeStream = createWriteStream("./hello.txt");

stream.on("data", (chunk) => {
  console.log("finished reading the file");
  writeStream.write(chunk);
});
