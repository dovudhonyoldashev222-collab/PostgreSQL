module.exports = (sequelize, DataTypes) => {
    const TicketStatus = sequelize.define("TicketStatus", {
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

    TicketStatus.associate = (models) => {
        TicketStatus.hasMany(models.Booking, {
            foreignKey: "status_id",
            as: "bookings",
        });
        TicketStatus.hasMany(models.Ticket, {
            foreignKey: "ticket_status_id",
            as: "tickets",
        });
    };

    return TicketStatus;
};
