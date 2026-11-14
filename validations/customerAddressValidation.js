const Joi = require("joi");

const validateCustomerAddress = (customerAddress) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().required(),
        name: Joi.string().required(),
        region_id: Joi.number().integer().allow(null),
        district_id: Joi.number().integer().allow(null),
        street: Joi.string().allow(null, ""),
        house: Joi.string().allow(null, ""),
        location: Joi.string().allow(null, ""),
        info: Joi.string().allow(null, ""),
    }).unknown(false);

    return schema.validate(customerAddress);
};

const validateCustomerAddressUpdate = (customerAddress) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer(),
        name: Joi.string(),
        region_id: Joi.number().integer().allow(null),
        district_id: Joi.number().integer().allow(null),
        street: Joi.string().allow(null, ""),
        house: Joi.string().allow(null, ""),
        location: Joi.string().allow(null, ""),
        info: Joi.string().allow(null, ""),
    }).min(1).unknown(false);

    return schema.validate(customerAddress);
};

module.exports = {
    validateCustomerAddress,
    validateCustomerAddressUpdate,
};
