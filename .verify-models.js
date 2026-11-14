process.env.PORT = "3100";

const assert = require("node:assert/strict");
const base = "http://localhost:3100/api";

const send = async (method, path, body) => {
    const response = await fetch(base + path, {
        method,
        headers: { "content-type": "application/json" },
        body: body === undefined ? undefined : JSON.stringify(body),
    });

    return { status: response.status, body: await response.json() };
};

const verification = async () => {
    const sequelize = require("./config/database");
    const models = require("./models");
    const app = require("./app");

    const server = app.listen(3100, async () => {
        try {
            const modelList = Object.values(models).filter(
                (model) => model && typeof model.getTableName === "function"
            );

            assert.equal(modelList.length, 30, `Model soni: ${modelList.length}`);

            const [rows] = await sequelize.query(
                "SELECT tablename AS table_name FROM pg_catalog.pg_tables WHERE schemaname = 'public'"
            );
            const dbTables = rows.map((row) => row.table_name);

            const missing = modelList
                .map((model) => model.getTableName())
                .filter((table) => !dbTables.includes(table));

            assert.equal(
                missing.length,
                0,
                `Bazada yo'q jadvallar: ${missing.join(", ")} | bazadagi jadvallar (${dbTables.length}): ${dbTables.join(", ")}`
            );

            console.log(`OK  ${modelList.length} model, har biri mavjud jadvalga ulangan`);

            const associationCount = modelList.reduce(
                (total, model) => total + Object.keys(model.associations).length,
                0
            );

            assert.ok(associationCount >= 68, `Bog'lanishlar soni kam: ${associationCount}`);
            console.log(`OK  bog'lanishlar (associations): ${associationCount}`);

            const region = await models.Region.findOne({
                include: [{ model: models.Country, as: "country" }],
            });
            console.log(`OK  include sinovi: ${region ? "region + country o'qildi" : "region jadvali bo'sh"}`);

            const { resources } = require("./routes/resourceRoutes");
            assert.equal(resources.length, 30, `Endpoint soni: ${resources.length}`);

            for (const { path } of resources) {
                const response = await fetch(`${base}/${path}`);
                assert.equal(response.status, 200, `GET /api/${path} -> ${response.status}`);
            }

            console.log(`OK  ${resources.length} endpoint GET 200 qaytardi`);

            const empty = await send("POST", "/countries", {});
            assert.equal(empty.status, 400, "Validatsiya ishlamadi");

            const created = await send("POST", "/countries", { country_name: `Split-sinov-${Date.now()}` });
            assert.equal(created.status, 201, "Yozuv yaratilmadi");

            const id = created.body.data.id;
            const read = await send("GET", `/countries/${id}`);
            assert.equal(read.status, 200, "Yozuv o'qilmadi");

            const removed = await send("DELETE", `/countries/${id}`);
            assert.equal(removed.status, 200, "Yozuv o'chirilmadi");

            console.log("OK  validatsiya va CRUD sinovi o'tdi");
            console.log("MODEL AJRATISH SINOVLARI MUVAFFAQIYATLI");
        } catch (error) {
            console.error("SINOV XATOSI:", error.message);
            process.exitCode = 1;
        } finally {
            server.close();
            await sequelize.close();
        }
    });

    return sequelize;
};

verification();
