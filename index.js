"use-strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  const n1 = Number(req.body.weight);
  const n2 = Number(req.body.height);

  const result = n1 + n2;

  res.send("result = " + result);
});

app.listen(3000, function () {
  console.log("Server is Running . . .");
});
