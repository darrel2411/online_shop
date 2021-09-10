"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            descriptions: {
                type: Sequelize.TEXT,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            image_url: {
                type: Sequelize.TEXT,
            },
            CategoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Categories",
                    key: "id",
                },
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Products");
    },
};
