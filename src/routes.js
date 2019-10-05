const routes = require("express").Router();

const LogController = require("./controller/LogController");

routes.post("/log", LogController.store);

module.exports = routes;
