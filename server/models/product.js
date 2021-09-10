"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Category, {
                foreignKey: "CategoryId",
            });
        }
    }
    Product.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Please fill name",
                    },
                },
            },
            descriptions: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Please fill descriptions",
                    },
                },
            },
            price: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "Please fill price",
                    },
                },
            },
            image_url: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Please fill image link",
                    },
                },
            },
            CategoryId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
