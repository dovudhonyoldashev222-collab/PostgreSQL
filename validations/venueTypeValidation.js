const Joi = require("joi");

const validateVenueType = (venueType) => {
    const schema = Joi.object({
        venue_id: Joi.number().integer().required(),
        type_id: Joi.number().integer().required(),
    }).unknown(false);

    return schema.validate(venueType);
};

const validateVenueTypeUpdate = (venueType) => {
    const schema = Joi.object({
        venue_id: Joi.number().integer(),
        type_id: Joi.number().integer(),
    }).min(1).unknown(false);

    return schema.validate(venueType);
};

module.exports = {
    validateVenueType,
    validateVenueTypeUpdate,
};
