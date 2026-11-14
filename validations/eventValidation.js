const Joi = require("joi");

const validateEvent = (event) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().allow(null, ""),
        photo: Joi.string().allow(null, ""),
        start_date: Joi.date().required(),
        start_time: Joi.string().allow(null),
        finish_date: Joi.date().required(),
        finish_time: Joi.string().allow(null),
        event_type_id: Joi.number().integer().allow(null),
        human_category_id: Joi.number().integer().allow(null),
        venue_id: Joi.number().integer().required(),
        lang_id: Joi.number().integer().allow(null),
        release_date: Joi.date().allow(null),
    }).unknown(false);

    return schema.validate(event);
};

const validateEventUpdate = (event) => {
    const schema = Joi.object({
        name: Joi.string(),
        description: Joi.string().allow(null, ""),
        photo: Joi.string().allow(null, ""),
        start_date: Joi.date(),
        start_time: Joi.string().allow(null),
        finish_date: Joi.date(),
        finish_time: Joi.string().allow(null),
        event_type_id: Joi.number().integer().allow(null),
        human_category_id: Joi.number().integer().allow(null),
        venue_id: Joi.number().integer(),
        lang_id: Joi.number().integer().allow(null),
        release_date: Joi.date().allow(null),
    }).min(1).unknown(false);

    return schema.validate(event);
};

module.exports = {
    validateEvent,
    validateEventUpdate,
};
