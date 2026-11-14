module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        finishedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
    });

    Cart.associate = (models) => {
        Cart.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
        Cart.hasMany(models.CartItem, {
            foreignKey: "cart_id",
            as: "items",
        });
        Cart.hasMany(models.Booking, {
            foreignKey: "cart_id",
            as: "bookings",
        });
    };

    return Cart;
};
