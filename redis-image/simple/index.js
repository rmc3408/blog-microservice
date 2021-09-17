const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hi World!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
