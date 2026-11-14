const Joi = require("joi");

const validateVenuePhoto = (venuePhoto) => {
    const schema = Joi.object({
        venue_id: Joi.number().integer().required(),
        url: Joi.string().required(),
    }).unknown(false);

    return schema.validate(venuePhoto);
};

const validateVenuePhotoUpdate = (venuePhoto) => {
    const schema = Joi.object({
        venue_id: Joi.number().integer(),
        url: Joi.string(),
    }).min(1).unknown(false);

    return schema.validate(venuePhoto);
};

module.exports = {
    validateVenuePhoto,
    validateVenuePhotoUpdate,
};
