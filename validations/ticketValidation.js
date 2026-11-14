const Joi = require("joi");

const validateTicket = (ticket) => {
    const schema = Joi.object({
        event_id: Joi.number().integer().required(),
        seat_id: Joi.number().integer().required(),
        price: Joi.number(),
        service_fee: Joi.number(),
        ticket_type_id: Joi.number().integer().allow(null),
        ticket_status_id: Joi.number().integer().allow(null),
    }).unknown(false);

    return schema.validate(ticket);
};

const validateTicketUpdate = (ticket) => {
    const schema = Joi.object({
        event_id: Joi.number().integer(),
        seat_id: Joi.number().integer(),
        price: Joi.number(),
        service_fee: Joi.number(),
        ticket_type_id: Joi.number().integer().allow(null),
        ticket_status_id: Joi.number().integer().allow(null),
    }).min(1).unknown(false);

    return schema.validate(ticket);
};

module.exports = {
    validateTicket,
    validateTicketUpdate,
};
