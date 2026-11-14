const { User, Customer } = require("../models");
const {
    validateUser,
    validateUserUpdate
} = require("../validations/userValidation");
const { Op } = require("sequelize");
const { serialize } = require("./crudHelpers");

// PASSWORDNI JAVOBDAN OLIB TASHLASH
const safeUser = (user) => {
    if (!user) return null;

    const data = serialize(user);
    if (data.customer) {
        delete data.customer.hashed_password;
        delete data.customer.hashed_refresh_token;
    }

    return data;
};
// ID TEKSHIRISH
const isValidId = (id) => {
    return /^\d+$/.test(id) && Number(id) > 0;
};
// DATABASE XATOLARINI TEKSHIRISH
const handleError = (res, error) => {
    console.error("DATABASE ERROR:", error);

    if (
        error.name === "SequelizeUniqueConstraintError"
    ) {
        return res.status(409).json({
            message: "This email or value already exists"
        });
    }

    return res.status(500).json({
        message: "Internal server error"
    });
};

// CREATE USER
exports.createUser = async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    try {
        const user = await User.create(req.body);

        return res.status(201).json({
            message: "User created successfully",
            data: safeUser(user)
        });
    } catch (error) {
        return handleError(res, error);
    }
};

// GET ALL USERS
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        return res.status(200).json({
            data: users.map((user) => safeUser(user)),
        });
    } catch (error) {
        return handleError(res, error);
    }
};

// GET USER BY ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    if (!isValidId(id)) {
        return res.status(400).json({
            message: "Invalid user ID"
        });
    }

    try {
        const user = await User.findByPk(id, {
            include: [
                {
                    model: Customer,
                    as: "customer",
                },
            ],
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            data: safeUser(user),
        });
    } catch (error) {
        return handleError(res, error);
    }
};

// UPDATE USER
exports.updateUser = async (req, res) => {
    const { id } = req.params;

    if (!isValidId(id)) {
        return res.status(400).json({
            message: "Invalid user ID"
        });
    }

    const { error } = validateUserUpdate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        await user.update(req.body);

        return res.status(200).json({
            message: "User updated successfully",
            data: safeUser(user)
        });
    } catch (error) {
        return handleError(res, error);
    }
};

// DELETE USER
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!isValidId(id)) {
        return res.status(400).json({
            message: "Invalid user ID"
        });
    }

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        await user.destroy();

        return res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        return handleError(res, error);
    }
};

// SEARCH USERS
exports.searchUsers = async (req, res) => {
    try {
        const query = req.query.query?.trim();

        if (!query) {
            return res.status(400).json({
                message: "Search query is required"
            });
        }

        const users = await User.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.iLike]: `%${query}%`
                        }
                    },
                    {
                        email: {
                            [Op.iLike]: `%${query}%`
                        }
                    }
                ]
            }
        });

        return res.status(200).json({
            data: users.map((user) => safeUser(user)),
        });
    } catch (error) {
        return handleError(res, error);
    }
};

