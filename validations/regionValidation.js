const Joi = require("joi");

const validateRegion = (region) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        country_id: Joi.number().integer().required(),
    }).unknown(false);

    return schema.validate(region);
};

const validateRegionUpdate = (region) => {
    const schema = Joi.object({
        name: Joi.string(),
        country_id: Joi.number().integer(),
    }).min(1).unknown(false);

    return schema.validate(region);
};

module.exports = {
    validateRegion,
    validateRegionUpdate,
};
