const Joi = require("joi");

const validateAdmin = (admin) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        hashed_password: Joi.string().required(),
        is_active: Joi.boolean(),
        is_creator: Joi.boolean(),
        hashed_refresh_token: Joi.string().allow(null),
    }).unknown(false);

    return schema.validate(admin);
};

const validateAdminUpdate = (admin) => {
    const schema = Joi.object({
        name: Joi.string(),
        email: Joi.string().email(),
        hashed_password: Joi.string(),
        is_active: Joi.boolean(),
        is_creator: Joi.boolean(),
        hashed_refresh_token: Joi.string().allow(null),
    }).min(1).unknown(false);

    return schema.validate(admin);
};

module.exports = {
    validateAdmin,
    validateAdminUpdate,
};
