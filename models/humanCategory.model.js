module.exports = (sequelize, DataTypes) => {
    const HumanCategory = sequelize.define("HumanCategory", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_age: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        finish_age: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        gender_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
    });

    HumanCategory.associate = (models) => {
        HumanCategory.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "gender",
        });
        HumanCategory.hasMany(models.Event, {
            foreignKey: "human_category_id",
            as: "events",
        });
    };

    return HumanCategory;
};
