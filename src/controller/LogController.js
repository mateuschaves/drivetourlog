const Log = require("./../models/Log");

module.exports = {
  async store(req, res) {
    return res.status(200).json(req.body);
  }
};
