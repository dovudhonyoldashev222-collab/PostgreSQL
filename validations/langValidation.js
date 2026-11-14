const Joi = require("joi");

const validateLang = (lang) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    }).unknown(false);

    return schema.validate(lang);
};

const validateLangUpdate = (lang) => {
    const schema = Joi.object({
        name: Joi.string(),
    }).min(1).unknown(false);

    return schema.validate(lang);
};

module.exports = {
    validateLang,
    validateLangUpdate,
};
