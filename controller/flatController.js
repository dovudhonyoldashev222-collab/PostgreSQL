const { Flat } = require("../models");
const { validateFlat, validateFlatUpdate } = require("../validations/flatValidation");
const { serialize, parseId, handleError, searchModel } = require("./crudHelpers");

exports.getAllFlats = async (_req, res) => {
    try {
        const records = await Flat.findAll();
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.createFlat = async (req, res) => {
    const { error } = validateFlat(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await Flat.create(req.body);
        return res.status(201).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.getFlatById = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await Flat.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.updateFlat = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    const { error } = validateFlatUpdate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await Flat.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.update(req.body);
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.deleteFlat = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await Flat.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.destroy();
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        return handleError(res, error);
    }
};


exports.searchFlats = async (req, res) => {
    try {
        const query = req.query.query?.trim();
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const records = await searchModel(Flat, query);
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};
