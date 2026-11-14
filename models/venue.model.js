module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        scheme_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        district_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        region_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
    });

    Venue.associate = (models) => {
        Venue.hasMany(models.Event, {
            foreignKey: "venue_id",
            as: "events",
        });
        Venue.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "seats",
        });
        Venue.hasMany(models.VenuePhoto, {
            foreignKey: "venue_id",
            as: "photos",
        });
        Venue.hasMany(models.VenueType, {
            foreignKey: "venue_id",
            as: "types",
        });
        Venue.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district",
        });
        Venue.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region",
        });
    };

    return Venue;
};
