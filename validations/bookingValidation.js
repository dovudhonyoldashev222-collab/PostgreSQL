const Joi = require("joi");

const validateBooking = (booking) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().required(),
        cart_id: Joi.number().integer().allow(null),
        finishedAt: Joi.date().allow(null),
        payment_method_id: Joi.number().integer().allow(null),
        delivery_method_id: Joi.number().integer().allow(null),
        discount_id: Joi.number().integer().allow(null),
        status_id: Joi.number().integer().allow(null),
    }).unknown(false);

    return schema.validate(booking);
};

const validateBookingUpdate = (booking) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer(),
        cart_id: Joi.number().integer().allow(null),
        finishedAt: Joi.date().allow(null),
        payment_method_id: Joi.number().integer().allow(null),
        delivery_method_id: Joi.number().integer().allow(null),
        discount_id: Joi.number().integer().allow(null),
        status_id: Joi.number().integer().allow(null),
    }).min(1).unknown(false);

    return schema.validate(booking);
};

module.exports = {
    validateBooking,
    validateBookingUpdate,
};
