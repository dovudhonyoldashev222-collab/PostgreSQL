const { Model, Op } = require("sequelize");

const hiddenAttributes = new Set([
    "password",
    "hashed_password",
    "hashed_refresh_token",
    "card_number",
]);

const serialize = (record) => {
    const data = record.toJSON();
    hiddenAttributes.forEach((attribute) => delete data[attribute]);
    if (record.constructor.name === "CustomerCard") {
        delete data.number;
    }
    return data;
};

const parseId = (value) => {
    if (!/^[1-9]\d*$/.test(value)) {
        return null;
    }

    const id = Number(value);
    return Number.isSafeInteger(id) ? id : null;
};

const handleError = (res, error) => {
    if (error.name === "SequelizeValidationError") {
        return res.status(400).json({
            message: error.errors.map((item) => item.message),
        });
    }

    if (error.name === "SequelizeForeignKeyConstraintError") {
        return res.status(409).json({
            message: "This record is referenced by another record or has an invalid reference",
        });
    }

    if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({
            message: "A record with this value already exists",
        });
    }

    console.error("RESOURCE API ERROR:", error);
    return res.status(500).json({ message: "Internal server error" });
};

const isSequelizeModel = (value) =>
    typeof value === "function" && value.prototype instanceof Model;

const skippedSearchFields = new Set([
    "password",
    "hashed_password",
    "hashed_refresh_token",
    "card_number",
    "number",
]);

const searchModel = async (model, query) => {
    const term = `%${query}%`;
    const numericQuery = /^\d+$/.test(query) ? Number(query) : null;
    const filters = [];

    for (const [name, attribute] of Object.entries(model.rawAttributes)) {
        if (skippedSearchFields.has(name)) {
            continue;
        }

        const type = attribute.type.key;
        if (["STRING", "TEXT", "CITEXT"].includes(type)) {
            filters.push({ [name]: { [Op.iLike]: term } });
        } else if (
            numericQuery !== null &&
            ["INTEGER", "BIGINT", "SMALLINT", "FLOAT", "DOUBLE", "DECIMAL"].includes(type)
        ) {
            filters.push({ [name]: numericQuery });
        }
    }

    if (!filters.length) {
        return [];
    }

    return model.findAll({ where: { [Op.or]: filters } });
};

module.exports = { serialize, parseId, handleError, isSequelizeModel, searchModel };
