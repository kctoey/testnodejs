const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 4000;
const productsRouter = require("./src/router/productsRouter");
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "Lnwza55",
    customers: ["John L.", "Frank", "Leon"],
  });
});
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.listen(port, () => {
  debug("Listening on port" + chalk.red(":" + port));
  console.log(chalk.blue("Hello Fucking world!!!"));
});
