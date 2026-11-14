module.exports = (sequelize, DataTypes) => {
    const Lang = sequelize.define("Lang", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });

    Lang.associate = (models) => {
        Lang.hasMany(models.Event, {
            foreignKey: "lang_id",
            as: "events",
        });
    };

    return Lang;
};
