const sequelize = require("./config/database");
const models = require("./models");

(async () => {
    // 1. Country -> Region
    const country = await models.Country.create({ country_name: "Test Country" });
    const region = await models.Region.create({ name: "Test Region", country_id: country.id });

    const r1 = await models.Region.findByPk(region.id, {
        include: [{ model: models.Country, as: "country" }],
    });
    console.log("1. Region include Country:", !!r1.country, "->", r1.country.country_name);

    // 2. Region -> District
    const district = await models.District.create({ name: "Test District", region_id: region.id });
    const r2 = await models.District.findByPk(district.id, {
        include: [{ model: models.Region, as: "region" }],
    });
    console.log("2. District include Region:", !!r2.region, "->", r2.region.name);

    // 3. Gender -> Customer
    const gender = await models.Gender.create({ name: "Test Gender" });
    const customer = await models.Customer.create({
        first_name: "A", last_name: "B", phone: "998901234567",
        hashed_password: "x", email: "a@b.com", gender_id: gender.id,
    });
    const r3 = await models.Customer.findByPk(customer.id, {
        include: [{ model: models.Gender, as: "gender" }],
    });
    console.log("3. Customer include Gender:", !!r3.gender, "->", r3.gender.name);

    // 4. Venue -> District
    const venue = await models.Venue.create({ name: "Test Venue", address: "x", district_id: district.id });
    const r4 = await models.Venue.findByPk(venue.id, {
        include: [{ model: models.District, as: "district" }],
    });
    console.log("4. Venue include District:", !!r4.district, "->", r4.district.name);

    // 5. Event -> Venue
    const event = await models.Event.create({
        name: "Test Event", start_date: "2026-01-01", finish_date: "2026-01-01",
        venue_id: venue.id,
    });
    const r5 = await models.Event.findByPk(event.id, {
        include: [{ model: models.Venue, as: "venue" }],
    });
    console.log("5. Event include Venue:", !!r5.venue, "->", r5.venue.name);

    // 6. Ticket -> Event
    const booking = await models.Booking.create({ customer_id: customer.id });
    const seatType = await models.SeatType.create({ name: "VIP" });
    const seat = await models.Seat.create({
        row_number: 1, number: 1, venue_id: venue.id, seat_type_id: seatType.id,
    });
    const ticket = await models.Ticket.create({
        booking_id: booking.id, event_id: event.id, seat_id: seat.id, price: 50000,
    });
    const r6 = await models.Ticket.findByPk(ticket.id, {
        include: [
            { model: models.Event, as: "event" },
            { model: models.Booking, as: "booking" },
            { model: models.Seat, as: "seat" },
        ],
    });
    console.log("6. Ticket include Event/Booking/Seat:",
        !!r6.event && !!r6.booking && !!r6.seat,
        "->", r6.event.name, "| seat #", r6.seat.number);

    // 7. Cart -> CartItem
    const cart = await models.Cart.create({ customer_id: customer.id });
    const cartItem = await models.CartItem.create({ cart_id: cart.id, seat_id: seat.id });
    const r7 = await models.Cart.findByPk(cart.id, {
        include: [{ model: models.CartItem, as: "items" }],
    });
    console.log("7. Cart include CartItem:", r7.items.length === 1, "-> items:", r7.items.length);

    // 8. Customer -> CustomerCard
    const card = await models.CustomerCard.create({
        customer_id: customer.id, name: "card", number: "1234",
    });
    const r8 = await models.Customer.findByPk(customer.id, {
        include: [{ model: models.CustomerCard, as: "cards" }],
    });
    console.log("8. Customer include Cards:", r8.cards.length === 1, "-> cards:", r8.cards.length);

    // 9. Booking -> TicketStatus
    const status = await models.TicketStatus.create({ name: "active" });
    await booking.update({ status_id: status.id });
    const r9 = await models.Booking.findByPk(booking.id, {
        include: [{ model: models.TicketStatus, as: "status" }],
    });
    console.log("9. Booking include TicketStatus:", !!r9.status, "->", r9.status.name);

    // 10. VenueType -> Type
    const type = await models.Type.create({ name: "type1" });
    const vt = await models.VenueType.create({ venue_id: venue.id, type_id: type.id });
    const r10 = await models.VenueType.findByPk(vt.id, {
        include: [{ model: models.Type, as: "type" }],
    });
    console.log("10. VenueType include Type:", !!r10.type, "->", r10.type.name);

    // tozalash
    await models.Ticket.destroy({ where: { id: ticket.id } });
    await models.CartItem.destroy({ where: { id: cartItem.id } });
    await models.Cart.destroy({ where: { id: cart.id } });
    await models.Booking.destroy({ where: { id: booking.id } });
    await models.Event.destroy({ where: { id: event.id } });
    await models.Seat.destroy({ where: { id: seat.id } });
    await models.SeatType.destroy({ where: { id: seatType.id } });
    await models.VenueType.destroy({ where: { id: vt.id } });
    await models.Venue.destroy({ where: { id: venue.id } });
    await models.CustomerCard.destroy({ where: { id: card.id } });
    await models.Customer.destroy({ where: { id: customer.id } });
    await models.Gender.destroy({ where: { id: gender.id } });
    await models.District.destroy({ where: { id: district.id } });
    await models.Region.destroy({ where: { id: region.id } });
    await models.Country.destroy({ where: { id: country.id } });
    await models.TicketStatus.destroy({ where: { id: status.id } });
    await models.Type.destroy({ where: { id: type.id } });

    console.log("\nBarcha bog'lanishlar to'g'ri ishladi!");
    await sequelize.close();
})().catch(async (error) => {
    console.error("Bog'lanish sinovi xatosi:", error);
    await sequelize.close();
    process.exitCode = 1;
});
