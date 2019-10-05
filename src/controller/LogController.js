const Log = require("./../models/Log");

module.exports = {
  async store(req, res) {
    console.log(req.body);
    try {
      const log = await Log.create(req.body);
      return res.status(200).json(log);
    } catch (error) {
      console.log(error);
    }
  }
};
