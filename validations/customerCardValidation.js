const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().required(),
        name: Joi.string().required(),
        phone: Joi.string().allow(null, ""),
        number: Joi.string().required(),
        year: Joi.number().integer().allow(null),
        is_active: Joi.boolean(),
        is_main: Joi.boolean(),
    }).unknown(false);

    return schema.validate(customerCard);
};

const validateCustomerCardUpdate = (customerCard) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer(),
        name: Joi.string(),
        phone: Joi.string().allow(null, ""),
        number: Joi.string(),
        year: Joi.number().integer().allow(null),
        is_active: Joi.boolean(),
        is_main: Joi.boolean(),
    }).min(1).unknown(false);

    return schema.validate(customerCard);
};

module.exports = {
    validateCustomerCard,
    validateCustomerCardUpdate,
};
