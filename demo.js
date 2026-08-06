import bodyParser from "body-parser";
import express from "express";

const app = express();
app.set("view engine", "ejs");
app.use("/styles", express.static("styles"));

const urlParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.render("index", { name: "Zahid" });
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

app.get("/contact", (req, res) => {
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlParser, (req, res) => {
  console.log(req.body);

  res.render("contact-succes", { data: req.body });
});

app.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
