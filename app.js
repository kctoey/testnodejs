const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const app = express();
const port = 3000;
const morgan = require("morgan");
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("Hello world mama");
});

app.listen(port, () => {
  debug("Listening on port" + chalk.red(":" + port));
  console.log(chalk.blue("Hello world!"));
});
