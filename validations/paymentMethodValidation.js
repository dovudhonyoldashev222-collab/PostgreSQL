const Joi = require("joi");

const validatePaymentMethod = (paymentMethod) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    }).unknown(false);

    return schema.validate(paymentMethod);
};

const validatePaymentMethodUpdate = (paymentMethod) => {
    const schema = Joi.object({
        name: Joi.string(),
    }).min(1).unknown(false);

    return schema.validate(paymentMethod);
};

module.exports = {
    validatePaymentMethod,
    validatePaymentMethodUpdate,
};
