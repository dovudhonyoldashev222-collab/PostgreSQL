module.exports = (sequelize, DataTypes) => {
    const Sector = sequelize.define("Sector", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        sector_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });

    return Sector;
};
