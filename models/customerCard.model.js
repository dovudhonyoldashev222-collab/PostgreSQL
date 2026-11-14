module.exports = (sequelize, DataTypes) => {
    const CustomerCard = sequelize.define("CustomerCard", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        year: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        is_main: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });

    CustomerCard.associate = (models) => {
        CustomerCard.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
    };

    return CustomerCard;
};
