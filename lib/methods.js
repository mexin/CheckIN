Meteor.methods({
    removeAllBoletos: function () {
        return Boletos.remove({});
    },
    removeAllOrdenes: function () {
        return Ordenes.remove({});
    },
    upload: function (fileContent) {
        console.log("start insert");
        import_tickets(fileContent);
        console.log("completed");
    },
    uploadFC: function (fileContent) {
        console.log("start insert");
        importTicketsFC(fileContent);
        console.log("completed");
    },
    generarEntrega: function () {
        var now = new Date();
        Boletos.insert({
            nombre: 'Boleto Generado',
            ticketType: 'Carrera 5K',
            kitEntregado: true,
            kitHora: now
        });
    }
});

var import_tickets = function (file) {
    console.log("Empezando la importación de Boletos de Carrera 5K")
    var lines = file.split(/\r\n|\n/);
    var l = lines.length - 1;
    for (var i = 0; i < l; i++) {
        var line = lines[i];
        var line_parts = line.split(',');
        var name = line_parts[0];
        var email = line_parts[1];
        var ticketId = line_parts[2];
        var quantity = line_parts[3];
        var ticketType = line_parts[4];
        //Buscamos y agregamos si no existe el boleto.
        var query = Boletos.findOne({ticketId: ticketId});
        //console.log(query);
        if (query === undefined) {
            var result = Boletos.insert({
                nombre: name,
                email: email,
                ticketId: ticketId,
                quantity: quantity,
                ticketType: 'Carrera 5K',
                checkIn: false,
                horaChecado: null,
                checador: null,
                kitEntregado: false,
                kitHora: null
            });
            //console.log(Boletos.findOne(result));
        }

    }
    ;
}

var importTicketsFC = function (file) {
    console.log("Empezando la importación de Boletos de Fiesta de Color")
    var lines = file.split(/\r\n|\n/);
    var l = lines.length - 1;
    for (var i = 0; i < l; i++) {
        var line = lines[i];
        var line_parts = line.split(',');
        var name = line_parts[0];
        var email = line_parts[1];
        var ticketId = line_parts[2];
        var quantity = line_parts[3];
        var ticketType = line_parts[4];
        //Buscamos y agregamos si no existe el boleto.
        var query = Boletos.findOne({ticketId: ticketId});
        //console.log(query);
        if (query === undefined) {
            var result = Boletos.insert({
                nombre: name,
                email: email,
                ticketId: ticketId,
                quantity: quantity,
                ticketType: 'Fiesta de Color',
                checkIn: false,
                horaChecado: null,
                checador: null
            });
            //console.log(Boletos.findOne(result));
        }

    }
    ;
}

var import_ordenes = function (file) {
    console.log("Empezando la importación de Ordenes")
    var lines = file.split(/\r\n|\n/);
    var l = lines.length - 1;
    for (var i = 0; i < l; i++) {
        var line = lines[i];
        var line_parts = line.split(',');
        // Valores
        var ordenId = line_parts[0];
        var date = line_parts[1];
        var discount = line_parts[2];
        var total = line_parts[3];
        var paymentMethod = line_parts[4];
        var email = line_parts[5];
        var Nombre = line_parts[6] + " " + line_parts[7];
        var tel = line_parts[8];
        var ciudad = line_parts[9];
        var estado = line_parts[10];
        var notas = line_parts[11];
        var item1 = line_parts[12];
        var item2 = line_parts[13];
        var matricula = line_parts[14];
        var p1 = line_parts[15];
        var pt1 = line_parts[16];
        var p2 = line_parts[17];
        var pt2 = line_parts[18];
        var p3 = line_parts[19];
        var pt3 = line_parts[20];
        var p4 = line_parts[21];
        var pt4 = line_parts[22];
        var p5 = line_parts[23];
        var pt5 = line_parts[24];
        var p6 = line_parts[25];
        var pt6 = line_parts[26];
        var p7 = line_parts[27];
        var pt7 = line_parts[28];
        var p8 = line_parts[29];
        var pt8 = line_parts[30];
        var p9 = line_parts[31];
        var pt9 = line_parts[32];
        var p10 = line_parts[33];
        var pt10 = line_parts[34];

        var result = Ordenes.insert({
            ordenId: ordenId,
            fecha: date,
            descuento: discount,
            total: total,
            tipoPago: paymentMethod,
            email: email,
            nombre: nombre,
            telefono: tel,
            ciudad: ciudad,
            estado: estado,
            notas: notas,
            item1: item1,
            item2: item2,
            matriculaUAG: matricula,
            p1: p1,
            pt1: pt1,
        });
        console.log(Ordenes.findOne(result));
    }
    ;
}
