module.exports = (sequelize, DataTypes) => {
    const VenueType = sequelize.define("VenueType", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        venue_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        type_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    });

    VenueType.associate = (models) => {
        VenueType.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        VenueType.belongsTo(models.Type, {
            foreignKey: "type_id",
            as: "type",
        });
    };

    return VenueType;
};
