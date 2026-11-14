module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define("CartItem", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        cart_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        seat_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    });

    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Cart, {
            foreignKey: "cart_id",
            as: "cart",
        });
        CartItem.belongsTo(models.Seat, {
            foreignKey: "seat_id",
            as: "seat",
        });
    };

    return CartItem;
};
