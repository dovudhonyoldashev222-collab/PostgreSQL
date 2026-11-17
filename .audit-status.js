const fs = require("fs");
const path = require("path");
const models = require("./models");
const { swaggerSpec } = require("./swagger/swagger");
const { isSequelizeModel } = require("./controller/crudHelpers");

const issues = [];
const list = Object.entries(models).filter(
    ([name, model]) => name !== "sequelize" && isSequelizeModel(model)
);

for (const [name, model] of list) {
    for (const assoc of Object.values(model.associations || {})) {
        const fk = assoc.foreignKey;
        if (assoc.associationType === "BelongsTo" && !assoc.source.rawAttributes[fk]) {
            issues.push(`${name} belongsTo ${assoc.target.name} missing column ${fk}`);
        }
        if (
            (assoc.associationType === "HasMany" || assoc.associationType === "HasOne") &&
            !assoc.target.rawAttributes[fk]
        ) {
            issues.push(`${name} hasMany ${assoc.target.name} dangling, missing ${fk}`);
        }
    }
}

const incoming = new Set();
for (const [, model] of list) {
    for (const assoc of Object.values(model.associations || {})) {
        if (assoc.associationType === "BelongsTo" || assoc.associationType === "HasMany") {
            incoming.add(assoc.target.name);
        }
    }
}

const checks = {
    Booking: models.Booking.rawAttributes.customer_id ? "extra customer_id" : null,
    CartItem: models.CartItem.rawAttributes.seat_id
        ? "still seat_id"
        : models.CartItem.rawAttributes.ticket_id
          ? null
          : "missing ticket_id",
    CustomerAddress: models.CustomerAddress.rawAttributes.flat_id ? null : "missing flat_id",
    Seat: models.Seat.rawAttributes.sector_id ? null : "missing sector_id",
    Ticket: [
        models.Ticket.rawAttributes.booking_id ? "invented booking_id" : null,
        models.Ticket.rawAttributes.service_fee ? null : "missing service_fee",
    ]
        .filter(Boolean)
        .join(", ") || null,
    Venue: models.Venue.rawAttributes.region_id ? null : "missing region_id",
    Flat: incoming.has("Flat") ? null : "orphaned",
    Sector: incoming.has("Sector") ? null : "orphaned",
    RegionVenue: models.Venue.rawAttributes.region_id ? null : "dangling hasMany Venue",
};

for (const [name, message] of Object.entries(checks)) {
    if (message) issues.push(`${name}: ${message}`);
}

for (const file of fs.readdirSync("routes")) {
    if (!file.endsWith(".js") || file === "resourceRoutes.js") continue;
    const src = fs.readFileSync(path.join("routes", file), "utf8");
    const blocks = (src.match(/@swagger/g) || []).length;
    if (blocks !== 7) issues.push(`${file} swagger blocks=${blocks}`);
    if (!src.includes("/search")) issues.push(`${file} no search route`);
    for (const piece of ["router.post(\"/\")", "router.get(\"/\")", "router.get(\"/:id\")", "router.put(\"/:id\")", "router.delete(\"/:id\")"]) {
        if (!src.includes(piece)) issues.push(`${file} missing ${piece}`);
    }
}

for (const file of fs.readdirSync("controller")) {
    if (file === "crudHelpers.js") continue;
    const src = fs.readFileSync(path.join("controller", file), "utf8");
    if (!/exports\.search/.test(src)) issues.push(`${file} no search export`);
    if (!/exports\.create/.test(src)) issues.push(`${file} no create`);
    if (!/exports\.update/.test(src)) issues.push(`${file} no update`);
    if (!/exports\.delete/.test(src)) issues.push(`${file} no delete`);
}

const byTag = {};
for (const item of Object.values(swaggerSpec.paths)) {
    for (const op of Object.values(item)) {
        for (const tag of op.tags || []) {
            byTag[tag] = (byTag[tag] || 0) + 1;
        }
    }
}

const thinTags = Object.entries(byTag)
    .filter(([, count]) => count < 6)
    .map(([tag, count]) => `${tag}:${count}`);

console.log(
    JSON.stringify(
        {
            models: list.length,
            validations: fs.readdirSync("validations").length,
            swaggerPaths: Object.keys(swaggerSpec.paths).length,
            searchPaths: Object.keys(swaggerSpec.paths).filter((item) => item.endsWith("/search")).length,
            tags: Object.keys(byTag).length,
            thinTags,
            issues,
            untouchedWarning: "User is not on the diagram",
        },
        null,
        2
    )
);
