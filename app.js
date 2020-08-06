const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (request, response) => {
  response.json({
    status: "Successful",
  });
});
require("./src/data/database").connect();
app.use(routes);

module.exports = app;
