const Joi = require("joi");

const validateSeatType = (seatType) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    }).unknown(false);

    return schema.validate(seatType);
};

const validateSeatTypeUpdate = (seatType) => {
    const schema = Joi.object({
        name: Joi.string(),
    }).min(1).unknown(false);

    return schema.validate(seatType);
};

module.exports = {
    validateSeatType,
    validateSeatTypeUpdate,
};
