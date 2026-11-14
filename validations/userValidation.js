
const Joi = require("joi");

const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        customer_id: Joi.number().integer().positive().allow(null),
    }).unknown(false);

    return schema.validate(user);
};

const validateUserUpdate = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3),
        email: Joi.string().email(),
        password: Joi.string().min(6),
        customer_id: Joi.number().integer().positive().allow(null),
    }).min(1).unknown(false);

    return schema.validate(user);
};

module.exports = {
    validateUser,
    validateUserUpdate,
};