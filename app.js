
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const sequelize = require("./config/database");
require("./models");
const setupSwagger = require("./swagger/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const { router: resourceRoutes } = require("./routes/resourceRoutes");

app.use("/api", resourceRoutes);

setupSwagger(app);

if (require.main === module) {
    sequelize
        .sync({ alter: true })
        .then(() => {
            console.log("Bazaga ulandi");

            app.listen(PORT, "0.0.0.0", () => {
                console.log(`Server: http://localhost:${PORT}`);
                console.log(`Swagger: http://localhost:${PORT}/api-docs`);
            });
        })
        .catch((error) => {
            console.error("Baza xatosi:", error);
        });
}

module.exports = app;