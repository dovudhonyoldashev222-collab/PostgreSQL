module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
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
        region_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        district_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        house: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });

    CustomerAddress.associate = (models) => {
        CustomerAddress.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
        CustomerAddress.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        CustomerAddress.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district",
        });
    };

    return CustomerAddress;
};
