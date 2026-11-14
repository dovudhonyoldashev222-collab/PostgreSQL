const Joi = require("joi");

const validateDeliveryMethod = (deliveryMethod) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    }).unknown(false);

    return schema.validate(deliveryMethod);
};

const validateDeliveryMethodUpdate = (deliveryMethod) => {
    const schema = Joi.object({
        name: Joi.string(),
    }).min(1).unknown(false);

    return schema.validate(deliveryMethod);
};

module.exports = {
    validateDeliveryMethod,
    validateDeliveryMethodUpdate,
};
