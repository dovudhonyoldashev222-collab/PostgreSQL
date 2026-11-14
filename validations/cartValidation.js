const Joi = require("joi");

const validateCart = (cart) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().required(),
        finishedAt: Joi.date().allow(null),
        status_id: Joi.number().integer().allow(null),
    }).unknown(false);

    return schema.validate(cart);
};

const validateCartUpdate = (cart) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer(),
        finishedAt: Joi.date().allow(null),
        status_id: Joi.number().integer().allow(null),
    }).min(1).unknown(false);

    return schema.validate(cart);
};

module.exports = {
    validateCart,
    validateCartUpdate,
};
