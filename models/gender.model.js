module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
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
        post_index: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Gender.associate = (models) => {
        Gender.hasMany(models.Customer, {
            foreignKey: "gender_id",
            as: "customers",
        });
        Gender.hasMany(models.HumanCategory, {
            foreignKey: "gender_id",
            as: "humanCategories",
        });
    };

    return Gender;
};
