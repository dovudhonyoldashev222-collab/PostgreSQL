const sequelize = require("./config/database");

(async () => {
    const tables = ["Venues", "Seats", "Tickets", "Sectors"];
    for (const tableName of tables) {
        const [cols] = await sequelize.query(
            `SELECT column_name FROM information_schema.columns
             WHERE table_schema = 'public' AND table_name = :tableName
             ORDER BY ordinal_position`,
            { replacements: { tableName } }
        );
        console.log(
            tableName + ":",
            cols.length ? cols.map((c) => c.column_name).join(", ") : "(jadval/ustun topilmadi)"
        );
    }
    await sequelize.close();
})().catch(async (error) => {
    console.error(error.message);
    await sequelize.close();
    process.exitCode = 1;
});