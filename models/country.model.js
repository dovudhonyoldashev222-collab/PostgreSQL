module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        country_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });

    Country.associate = (models) => {
        Country.hasMany(models.Region, {
            foreignKey: "country_id",
            as: "regions",
        });
    };

    return Country;
};
