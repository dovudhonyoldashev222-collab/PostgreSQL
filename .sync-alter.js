const sequelize = require("./config/database");
require("./models");

(async () => {
    await sequelize.sync({ alter: true });
    console.log("sync(alter) tugadi");
    await sequelize.close();
})().catch(async (error) => {
    console.error(error);
    await sequelize.close();
    process.exitCode = 1;
});