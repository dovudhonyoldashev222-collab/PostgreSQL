const Joi = require("joi");

const validateFlat = (flat) => {
    const schema = Joi.object({
        floor: Joi.number().integer().required(),
        condition: Joi.string().allow(null, ""),
    }).unknown(false);

    return schema.validate(flat);
};

const validateFlatUpdate = (flat) => {
    const schema = Joi.object({
        floor: Joi.number().integer(),
        condition: Joi.string().allow(null, ""),
    }).min(1).unknown(false);

    return schema.validate(flat);
};

module.exports = {
    validateFlat,
    validateFlatUpdate,
};
