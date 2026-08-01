import { createServer } from "http";
import { createReadStream } from "fs";

const server = createServer((req, res) => {
  console.log("request received" + req.url);
  res.writeHead(200, { "content-type": "application/json" });

  const myObj = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  };

  res.end(JSON.stringify(myObj));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
