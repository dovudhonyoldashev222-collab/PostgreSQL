const { Lang } = require("../models");
const { validateLang, validateLangUpdate } = require("../validations/langValidation");
const { serialize, parseId, handleError, searchModel } = require("./crudHelpers");

exports.getAllLangs = async (_req, res) => {
    try {
        const records = await Lang.findAll();
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.createLang = async (req, res) => {
    const { error } = validateLang(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await Lang.create(req.body);
        return res.status(201).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.getLangById = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await Lang.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.updateLang = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    const { error } = validateLangUpdate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await Lang.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.update(req.body);
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.deleteLang = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await Lang.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.destroy();
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        return handleError(res, error);
    }
};


exports.searchLangs = async (req, res) => {
    try {
        const query = req.query.query?.trim();
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const records = await searchModel(Lang, query);
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};
