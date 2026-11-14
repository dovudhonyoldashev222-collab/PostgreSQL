const Joi = require("joi");

const validateSeat = (seat) => {
    const schema = Joi.object({
        row_number: Joi.number().integer().required(),
        number: Joi.number().integer().required(),
        venue_id: Joi.number().integer().required(),
        seat_type_id: Joi.number().integer().required(),
        location: Joi.string().allow(null, ""),
        geometry: Joi.any().allow(null),
        scheme_id: Joi.number().integer().allow(null),
        sector_id: Joi.number().integer().required(),
    }).unknown(false);

    return schema.validate(seat);
};

const validateSeatUpdate = (seat) => {
    const schema = Joi.object({
        row_number: Joi.number().integer(),
        number: Joi.number().integer(),
        venue_id: Joi.number().integer(),
        seat_type_id: Joi.number().integer(),
        location: Joi.string().allow(null, ""),
        geometry: Joi.any().allow(null),
        scheme_id: Joi.number().integer().allow(null),
        sector_id: Joi.number().integer(),
    }).min(1).unknown(false);

    return schema.validate(seat);
};

module.exports = {
    validateSeat,
    validateSeatUpdate,
};
