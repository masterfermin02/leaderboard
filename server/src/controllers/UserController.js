const bcrypt = require("bcrypt");
const { promisify } = require("util");
const _ = require("lodash");

const UserModel = require("../database/models/user");

module.exports = {
  async addUser(req, res) {
    let userData = {
      ...req.body
    };
    const user = new UserModel(userData);

    try {
      const document = await user.save();
      const response = _.omit(document.toJSON());

      return res.status(200).send(response);
    } catch (error) {
      console.log(`ERROR: ${error}`);

      return res.send({ error });
    }
  },
  async users(req, res) {

    try {
      const documents = await UserModel.find();

      return res.status(200).send(documents);
    } catch (error) {
      console.log(`ERROR: ${error}`);

      return res.status(500).send({ error });
    }
  },
  async getUserInfo(req, res) {
    const { name } = req.params;
    const aggregate = promisify(UserModel.aggregate).bind(UserModel);

    try {
      const [user] = await aggregate([
        { $match: { name } }
      ]);

      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },
  async updateUser(req, res) {
    const { idNumber } = req.params;
    const user = await UserModel.findOneAndUpdate(
      { idNumber },
      req.body,
      { new: true }
    );
  
    return res.send(user);
  }
};
