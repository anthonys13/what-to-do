const { DataTypes, Model } = require('sequelize');

const sequelize = require("../sequelize");

class List extends Model {};

List.init({
    name: DataTypes.TEXT,
    position: DataTypes.INTEGER
}, {
    sequelize,
    tableName: "list"
});

module.exports = List;
