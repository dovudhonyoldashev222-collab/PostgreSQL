const Joi = require("joi");

const validateCartItem = (cartItem) => {
    const schema = Joi.object({
        cart_id: Joi.number().integer().required(),
        seat_id: Joi.number().integer().required(),
        event_id: Joi.number().integer().allow(null),
    }).unknown(false);

    return schema.validate(cartItem);
};

const validateCartItemUpdate = (cartItem) => {
    const schema = Joi.object({
        cart_id: Joi.number().integer(),
        seat_id: Joi.number().integer(),
        event_id: Joi.number().integer().allow(null),
    }).min(1).unknown(false);

    return schema.validate(cartItem);
};

module.exports = {
    validateCartItem,
    validateCartItemUpdate,
};
