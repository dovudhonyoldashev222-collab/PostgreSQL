const { Type } = require("../models");
const { validateType, validateTypeUpdate } = require("../validations/typeValidation");
const { serialize, parseId, handleError, searchModel } = require("./crudHelpers");

exports.getAllTypes = async (_req, res) => {
    try {
        const records = await Type.findAll();
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.createType = async (req, res) => {
    const { error } = validateType(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await Type.create(req.body);
        return res.status(201).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.getTypeById = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await Type.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.updateType = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    const { error } = validateTypeUpdate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await Type.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.update(req.body);
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.deleteType = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await Type.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.destroy();
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        return handleError(res, error);
    }
};


exports.searchTypes = async (req, res) => {
    try {
        const query = req.query.query?.trim();
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const records = await searchModel(Type, query);
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};
