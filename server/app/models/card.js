const { DataTypes, Model } = require('sequelize');

const sequelize = require("../sequelize");

class Card extends Model {};

Card.init({
    description: DataTypes.TEXT,
    position: DataTypes.INTEGER,
    color: DataTypes.TEXT,
    list_id: DataTypes.INTEGER
}, {
    sequelize,
    tableName: "card"
});

module.exports = Card;
