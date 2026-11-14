const Joi = require("joi");

const validateDistrict = (district) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        region_id: Joi.number().integer().required(),
    }).unknown(false);

    return schema.validate(district);
};

const validateDistrictUpdate = (district) => {
    const schema = Joi.object({
        name: Joi.string(),
        region_id: Joi.number().integer(),
    }).min(1).unknown(false);

    return schema.validate(district);
};

module.exports = {
    validateDistrict,
    validateDistrictUpdate,
};
