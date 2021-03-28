var DataTypes = require("sequelize").DataTypes;
var _identity = require("./identity");
var _users = require("./users");

function initModels(sequelize) {
  var identity = _identity(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    identity,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
