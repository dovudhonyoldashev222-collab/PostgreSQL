const { VenuePhoto } = require("../models");
const { validateVenuePhoto, validateVenuePhotoUpdate } = require("../validations/venuePhotoValidation");
const { serialize, parseId, handleError, searchModel } = require("./crudHelpers");

exports.getAllVenuePhotos = async (_req, res) => {
    try {
        const records = await VenuePhoto.findAll();
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.createVenuePhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await VenuePhoto.create(req.body);
        return res.status(201).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.getVenuePhotoById = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await VenuePhoto.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.updateVenuePhoto = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    const { error } = validateVenuePhotoUpdate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const record = await VenuePhoto.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.update(req.body);
        return res.status(200).json({ data: serialize(record) });
    } catch (error) {
        return handleError(res, error);
    }
};

exports.deleteVenuePhoto = async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "ID must be a positive integer" });
    }

    try {
        const record = await VenuePhoto.findByPk(id);
        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }
        await record.destroy();
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        return handleError(res, error);
    }
};


exports.searchVenuePhotos = async (req, res) => {
    try {
        const query = req.query.query?.trim();
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const records = await searchModel(VenuePhoto, query);
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};
