import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Excercise route
app.get("/api/whoami", function (req, res) {
  console.log({ ip: req.ip });
  return res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});
// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello from waleed bukhari" });
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
