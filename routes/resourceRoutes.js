const express = require("express");
const models = require("../models");
const { isSequelizeModel } = require("../controller/crudHelpers");

const router = express.Router();

const toResourceName = (tableName) =>
    tableName
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .toLowerCase();

const resources = Object.entries(models)
    .filter(([name, model]) => name !== "sequelize" && isSequelizeModel(model))
    .map(([name, model]) => ({
        name,
        path: toResourceName(model.getTableName()),
        model,
    }));

resources.forEach(({ name, path }) => {
    const fileName = name[0].toLowerCase() + name.slice(1);
    const resourceRouter =
        name === "Customer"
            ? require("./customerRoute")
            : name === "User"
              ? require("./userRoutes")
              : require(`./${fileName}Route`);

    router.use(`/${path}`, resourceRouter);
});

module.exports = { router, resources };
