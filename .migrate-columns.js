const sequelize = require("./config/database");

(async () => {
    const statements = [
        'ALTER TABLE "Seats" ADD COLUMN IF NOT EXISTS sector_id SMALLINT',
        'ALTER TABLE "Tickets" ADD COLUMN IF NOT EXISTS service_fee DECIMAL(12, 2) NOT NULL DEFAULT 0',
        'ALTER TABLE "Tickets" DROP COLUMN IF EXISTS booking_id',
        'ALTER TABLE "Bookings" DROP COLUMN IF EXISTS customer_id',
        'ALTER TABLE "CartItems" ADD COLUMN IF NOT EXISTS ticket_id BIGINT',
        'ALTER TABLE "CartItems" DROP COLUMN IF EXISTS seat_id',
        'ALTER TABLE "CartItems" DROP COLUMN IF EXISTS event_id',
        'ALTER TABLE "CustomerAddresses" ADD COLUMN IF NOT EXISTS flat_id BIGINT',
        'ALTER TABLE "Venues" ADD COLUMN IF NOT EXISTS region_id SMALLINT',
        'ALTER TABLE "Flats" DROP COLUMN IF EXISTS venue_id',
        'ALTER TABLE "Users" DROP COLUMN IF EXISTS car_id',
    ];

    for (const statement of statements) {
        await sequelize.query(statement);
    }

    console.log("Migratsiya bajarildi");
    await sequelize.close();
})().catch(async (error) => {
    console.error(error.message);
    await sequelize.close();
    process.exitCode = 1;
});
