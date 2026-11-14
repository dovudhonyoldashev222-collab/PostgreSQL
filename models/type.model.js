module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define("Type", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });

    Type.associate = (models) => {
        Type.hasMany(models.VenueType, {
            foreignKey: "type_id",
            as: "venueTypes",
        });
    };

    return Type;
};
