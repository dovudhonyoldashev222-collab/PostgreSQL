module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        finish_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        finish_time: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        event_type_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        human_category_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        venue_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        lang_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        release_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    });

    Event.associate = (models) => {
        Event.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Event.belongsTo(models.EventType, {
            foreignKey: "event_type_id",
            as: "eventType",
        });
        Event.belongsTo(models.HumanCategory, {
            foreignKey: "human_category_id",
            as: "humanCategory",
        });
        Event.belongsTo(models.Lang, {
            foreignKey: "lang_id",
            as: "lang",
        });
        Event.hasMany(models.Ticket, {
            foreignKey: "event_id",
            as: "tickets",
        });
    };

    return Event;
};
