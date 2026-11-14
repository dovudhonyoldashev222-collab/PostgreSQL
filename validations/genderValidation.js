const Joi = require("joi");

const validateGender = (gender) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        post_index: Joi.string().allow(null),
    }).unknown(false);

    return schema.validate(gender);
};

const validateGenderUpdate = (gender) => {
    const schema = Joi.object({
        name: Joi.string(),
        post_index: Joi.string().allow(null),
    }).min(1).unknown(false);

    return schema.validate(gender);
};

module.exports = {
    validateGender,
    validateGenderUpdate,
};
