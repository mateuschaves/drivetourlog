const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

requireDir("./models");

app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes");

app.use(routes);

app.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});
