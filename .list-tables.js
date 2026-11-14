const sequelize = require("./config/database");

const main = async () => {
    const [rows] = await sequelize.query(
        `SELECT table_schema, table_name FROM information_schema.tables
         WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
         ORDER BY table_schema, table_name`
    );

    rows.forEach((row) => console.log(`${row.table_schema}.${row.table_name}`));
    console.log("JAMI:", rows.length);

    await sequelize.close();
};

main();
