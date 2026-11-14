const Joi = require("joi");

const validateHumanCategory = (humanCategory) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        start_age: Joi.number().integer().allow(null),
        finish_age: Joi.number().integer().allow(null),
        gender_id: Joi.number().integer().allow(null),
    }).unknown(false);

    return schema.validate(humanCategory);
};

const validateHumanCategoryUpdate = (humanCategory) => {
    const schema = Joi.object({
        name: Joi.string(),
        start_age: Joi.number().integer().allow(null),
        finish_age: Joi.number().integer().allow(null),
        gender_id: Joi.number().integer().allow(null),
    }).min(1).unknown(false);

    return schema.validate(humanCategory);
};

module.exports = {
    validateHumanCategory,
    validateHumanCategoryUpdate,
};
