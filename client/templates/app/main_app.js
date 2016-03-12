Template.main.helpers({
    ticketIdScan: function () {
        var ticket = qrScanner.message();
        //ticket = ticket.substring(45);
        return ticket;
    }
});

Template.main.events({
    "click #checkIn": function (e) {
        var ticket = this.ticketId;
        var now = new Date();

        Boletos.update({_id: this._id}, {
            $set: {checkIn: true, horaChecado: now}
        });
        console.log("TicketId: " + this._id + " Hora: " + now);
    },
    "click #quitar_checkIn": function (e) {
        var ticket = this.ticketId;

        Boletos.update({_id: this._id}, {
            $set: {checkIn: false, horaChecado: null}
        });
    },
    "click #entregar_kit": function (e) {
        var ticket = this.ticketId;
        var now = new Date();

        Boletos.update({_id: this._id}, {
            $set: {kitEntregado: true, kitHora: now}
        });
        console.log("TicketId: " + this._id + " Hora: " + now);
    },
    "click #regresar_kit": function (e) {
        var ticket = this.ticketId;

        Boletos.update({_id: this._id}, {
            $set: {kitEntregado: false, kitHora: null}
        });
    }
});

// Helpers Globales
Template.registerHelper("convertirTiempo", function (tiempo) {
    if (tiempo === null)
        return "";
    return moment(tiempo).format('dddd MMMM D YYYY, h:mm:ss a');
});


//Funcion para realizar acciones al scannear el boleto
qrScanner.on('scan', function (err, message) {
    if (message != null) {
        var str = message.substring(44);
        var query = Boletos.findOne({ticketId: message});

        if (query != null) {
            if (query.checkIn === true) {
                sAlert.warning('<h3><span class="mdi-alert-warning"></span> Ticket has already Check In</h3>');
            } else {
                sAlert.success('<h3><span class="mdi-navigation-check"></span> Valid Ticket</h3>');
            }
        } else {
            sAlert.error('<h3><span class="mdi-navigation-cancel"></span> Invalid Ticket, Not Found</h3>');
        }

    }
});

//Configuración de las alertas
sAlert.config({
    effect: 'genie',
    position: 'bottom',
    timeout: 5000,
    html: true,
    onRouteClose: true,
    stack: true,
    offset: 0
});
