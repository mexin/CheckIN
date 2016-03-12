// Seed Demo Data using Faker
if (Boletos.find().count() < 100) {
    _.each(_.range(100), function () {
        var randomEmail = faker.internet.email();
        var randomName = faker.name.findName();
        var ticketId = faker.phone.phoneNumberFormat(4);

        Boletos.insert({
            nombre: randomName,
            email: randomEmail,
            ticketId: ticketId,
            quantity: 1,
            ticketType: '5K Race',
            checkIn: false,
            horaChecado: null,
            checador: null,
            kitEntregado: false,
            kitHora: null
        });
    });
}