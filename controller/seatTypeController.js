const { SeatType } = require("../models");
const { validateSeatType, validateSeatTypeUpdate } = require("../validations/seatTypeValidation");
const { serialize, parseId, handleError, searchModel } = require("./crudHelpers");

exports.getAllSeatTypes = async (_req, res) => {
    try {
        const records = await SeatType.findAll();
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.createSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await SeatType.create(req.body);
        return res.status(201).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.getSeatTypeById = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await SeatType.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.updateSeatType = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    const { error } = validateSeatTypeUpdate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await SeatType.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.update(req.body);
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.deleteSeatType = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await SeatType.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.destroy();
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        return handleError(res, error);
    }
};


exports.searchSeatTypes = async (req, res) => {
    try {
        const query = req.query.query?.trim();
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const records = await searchModel(SeatType, query);
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};
