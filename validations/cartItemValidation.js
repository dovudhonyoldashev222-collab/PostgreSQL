const Joi = require("joi");

const validateCartItem = (cartItem) => {
    const schema = Joi.object({
        cart_id: Joi.number().integer().required(),
        ticket_id: Joi.number().integer().required(),
    }).unknown(false);

    return schema.validate(cartItem);
};

const validateCartItemUpdate = (cartItem) => {
    const schema = Joi.object({
        cart_id: Joi.number().integer(),
        ticket_id: Joi.number().integer(),
    }).min(1).unknown(false);

    return schema.validate(cartItem);
};

module.exports = {
    validateCartItem,
    validateCartItemUpdate,
};
