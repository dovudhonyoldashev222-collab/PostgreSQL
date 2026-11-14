const { Customer } = require("../models");
const { serialize, searchModel, handleError } = require("./crudHelpers");

exports.createCustomer = async (req, res) => {
    try {
        const { first_name, last_name, phone, hashed_password, email } = req.body || {};

        if (!first_name || !last_name || !phone || !hashed_password || !email) {
            return res.status(400).json({
                message: "first_name, last_name, phone, hashed_password va email kiritilishi shart",
            });
        }

        const customer = await Customer.create({
            first_name,
            last_name,
            phone,
            hashed_password,
            email,
        });

        return res.status(201).json({
            message: "Customer yaratildi",
            data: serialize(customer),
        });
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                message: "Bu email yoki phone allaqachon mavjud",
            });
        }

        if (error.name === "SequelizeValidationError") {
            return res.status(400).json({
                message: error.errors.map((item) => item.message),
            });
        }

        console.error("CREATE CUSTOMER ERROR:", error);

        return res.status(500).json({
            message: "Customer yaratishda xatolik",
        });
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();

        return res.status(200).json({
            message: "Customerlar ro'yxati",
            data: customers.map(serialize),
        });
    } catch (error) {
        console.error("GET CUSTOMERS ERROR:", error);

        return res.status(500).json({
            message: "Customerlarni olishda xatolik",
        });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isSafeInteger(id) || id < 1) {
            return res.status(400).json({
                message: "ID musbat butun son bo'lishi kerak",
            });
        }

        const customer = await Customer.findByPk(id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer topilmadi",
            });
        }

        return res.status(200).json({
            message: "Customer topildi",
            data: serialize(customer),
        });
    } catch (error) {
        console.error("GET CUSTOMER ERROR:", error);

        return res.status(500).json({
            message: "Customerni olishda xatolik",
        });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isSafeInteger(id) || id < 1) {
            return res.status(400).json({
                message: "ID musbat butun son bo'lishi kerak",
            });
        }

        const customer = await Customer.findByPk(id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer topilmadi",
            });
        }

        const { first_name, last_name, phone, hashed_password, email, birth_date, gender_id } = req.body;
        const updates = {};

        if (first_name !== undefined) updates.first_name = first_name;
        if (last_name !== undefined) updates.last_name = last_name;
        if (phone !== undefined) updates.phone = phone;
        if (hashed_password !== undefined) updates.hashed_password = hashed_password;
        if (email !== undefined) updates.email = email;
        if (birth_date !== undefined) updates.birth_date = birth_date;
        if (gender_id !== undefined) updates.gender_id = gender_id;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                message: "Yangilash uchun ma'lumot yuboring",
            });
        }

        await customer.update(updates);

        return res.status(200).json({
            message: "Customer yangilandi",
            data: serialize(customer),
        });
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                message: "Bu email yoki phone allaqachon mavjud",
            });
        }

        if (error.name === "SequelizeValidationError") {
            return res.status(400).json({
                message: error.errors.map((item) => item.message),
            });
        }

        console.error("UPDATE CUSTOMER ERROR:", error);

        return res.status(500).json({
            message: "Customerni yangilashda xatolik",
        });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isSafeInteger(id) || id < 1) {
            return res.status(400).json({
                message: "ID musbat butun son bo'lishi kerak",
            });
        }

        const customer = await Customer.findByPk(id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer topilmadi",
            });
        }

        await customer.destroy();

        return res.status(200).json({
            message: "Customer o'chirildi",
        });
    } catch (error) {
        console.error("DELETE CUSTOMER ERROR:", error);

        return res.status(500).json({
            message: "Customerni o'chirishda xatolik",
        });
    }
};


exports.searchCustomers = async (req, res) => {
    try {
        const query = req.query.query?.trim();
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        const records = await searchModel(Customer, query);
        return res.status(200).json({ data: records.map(serialize) });
    } catch (error) {
        return handleError(res, error);
    }
};
