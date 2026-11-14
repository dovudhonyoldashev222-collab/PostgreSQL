module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        row_number: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        number: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        venue_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        seat_type_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        geometry: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        scheme_id: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
    });

    Seat.associate = (models) => {
        Seat.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Seat.belongsTo(models.SeatType, {
            foreignKey: "seat_type_id",
            as: "seatType",
        });
        Seat.hasMany(models.CartItem, {
            foreignKey: "seat_id",
            as: "cartItems",
        });
        Seat.hasMany(models.Ticket, {
            foreignKey: "seat_id",
            as: "tickets",
        });
    };

    return Seat;
};
