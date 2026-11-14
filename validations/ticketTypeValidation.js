const Joi = require("joi");

const validateTicketType = (ticketType) => {
    const schema = Joi.object({
        ticket_type: Joi.string().required(),
    }).unknown(false);

    return schema.validate(ticketType);
};

const validateTicketTypeUpdate = (ticketType) => {
    const schema = Joi.object({
        ticket_type: Joi.string(),
    }).min(1).unknown(false);

    return schema.validate(ticketType);
};

module.exports = {
    validateTicketType,
    validateTicketTypeUpdate,
};
