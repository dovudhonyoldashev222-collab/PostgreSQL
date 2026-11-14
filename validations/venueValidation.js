const Joi = require("joi");

const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
        phone: Joi.string().allow(null, ""),
        location: Joi.string().allow(null, ""),
        scheme_id: Joi.number().integer().allow(null),
        district_id: Joi.number().integer().allow(null),
    }).unknown(false);

    return schema.validate(venue);
};

const validateVenueUpdate = (venue) => {
    const schema = Joi.object({
        name: Joi.string(),
        address: Joi.string(),
        phone: Joi.string().allow(null, ""),
        location: Joi.string().allow(null, ""),
        scheme_id: Joi.number().integer().allow(null),
        district_id: Joi.number().integer().allow(null),
    }).min(1).unknown(false);

    return schema.validate(venue);
};

module.exports = {
    validateVenue,
    validateVenueUpdate,
};
