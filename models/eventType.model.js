module.exports = (sequelize, DataTypes) => {
    const EventType = sequelize.define("EventType", {
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
        parent_event_type_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
    });

    EventType.associate = (models) => {
        EventType.belongsTo(models.EventType, {
            foreignKey: "parent_event_type_id",
            as: "parent",
        });
        EventType.hasMany(models.EventType, {
            foreignKey: "parent_event_type_id",
            as: "children",
        });
        EventType.hasMany(models.Event, {
            foreignKey: "event_type_id",
            as: "events",
        });
    };

    return EventType;
};
