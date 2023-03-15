const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));
app.get("/", (req, res) => {
  res.send("Not Found Index file");
});

app.listen(port, () => {
  debug("Listening on port" + chalk.red(":" + port));
  console.log(chalk.blue("Hello world!"));
});
