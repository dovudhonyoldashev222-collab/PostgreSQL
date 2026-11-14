module.exports = (sequelize, DataTypes) => {
    const Flat = sequelize.define("Flat", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        floor: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Flat.associate = (models) => {
        Flat.hasMany(models.CustomerAddress, {
            foreignKey: "flat_id",
            as: "customerAddresses",
        });
    };

    return Flat;
};
