const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const products = require("./data/products.json");
const productRouter = express.Router();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

productRouter.route("/").get((req, res) => {
  res.render("products", products);
});

productRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  res.render("product", {
    product: products[id],
  });
});

app.use("/products", productRouter);

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
