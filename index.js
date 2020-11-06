const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello chester");
});

app.listen(3002, () => {
  console.log("Chester ^_^");
});
