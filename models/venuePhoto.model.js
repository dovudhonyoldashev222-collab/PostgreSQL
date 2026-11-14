module.exports = (sequelize, DataTypes) => {
    const VenuePhoto = sequelize.define("VenuePhoto", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        venue_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    VenuePhoto.associate = (models) => {
        VenuePhoto.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
    };

    return VenuePhoto;
};
