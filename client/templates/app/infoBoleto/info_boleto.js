Template.infoBoleto.helpers({
    qrCode: function () {
        //var qr = qrScanner.message().substring(44);
        var qr = qrScanner.message();
        return Boletos.findOne({ticketId: qr});
    },
    idScan: function () {
        return this._id;
    },
    updateCheck: function () {
        console.log('ID: ' + this._id + ' Ticket: ' + this.ticketId + ' CheckIn: ' + this.checkIn);
        if (this.checkIn !== true) {
            // Boletos.update({_id: this._id}, {
            //   $set:{checkIn: true, horaChecado: new Date()}
            // });
        }
    }
});

Template.infoBoleto.events({
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
