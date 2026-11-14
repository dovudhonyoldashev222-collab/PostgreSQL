module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        event_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        seat_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 0,
        },
        service_fee: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 0,
        },
        ticket_type_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        ticket_status_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
    });

    Ticket.associate = (models) => {
        Ticket.belongsTo(models.Event, {
            foreignKey: "event_id",
            as: "event",
        });
        Ticket.belongsTo(models.Seat, {
            foreignKey: "seat_id",
            as: "seat",
        });
        Ticket.belongsTo(models.TicketType, {
            foreignKey: "ticket_type_id",
            as: "ticketType",
        });
        Ticket.belongsTo(models.TicketStatus, {
            foreignKey: "ticket_status_id",
            as: "ticketStatus",
        });
        Ticket.hasMany(models.CartItem, {
            foreignKey: "ticket_id",
            as: "cartItems",
        });
    };

    return Ticket;
};
