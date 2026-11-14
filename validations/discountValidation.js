const Joi = require("joi");

const validateDiscount = (discount) => {
    const schema = Joi.object({
        discount: Joi.string().required(),
        finish_date: Joi.date().iso().allow(null),
    }).unknown(false);

    return schema.validate(discount);
};

const validateDiscountUpdate = (discount) => {
    const schema = Joi.object({
        discount: Joi.string(),
        finish_date: Joi.date().iso().allow(null),
    }).min(1).unknown(false);

    return schema.validate(discount);
};

module.exports = {
    validateDiscount,
    validateDiscountUpdate,
};
