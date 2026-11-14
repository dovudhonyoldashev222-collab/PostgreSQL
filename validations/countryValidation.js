const Joi = require("joi");

const validateCountry = (country) => {
    const schema = Joi.object({
        country_name: Joi.string().required(),
    }).unknown(false);

    return schema.validate(country);
};

const validateCountryUpdate = (country) => {
    const schema = Joi.object({
        country_name: Joi.string(),
    }).min(1).unknown(false);

    return schema.validate(country);
};

module.exports = {
    validateCountry,
    validateCountryUpdate,
};
