module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    });

    Region.associate = (models) => {
        Region.belongsTo(models.Country, {
            foreignKey: "country_id",
            as: "country",
        });
        Region.hasMany(models.District, {
            foreignKey: "region_id",
            as: "districts",
        });
        Region.hasMany(models.Venue, {
            foreignKey: "region_id",
            as: "venues",
        });
        Region.hasMany(models.CustomerAddress, {
            foreignKey: "region_id",
            as: "customerAddresses",
        });
    };

    return Region;
};
