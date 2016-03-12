Template.dashboard.helpers({
    boletos: function () {
        return Boletos.find({});
    },
    sinCheck: function () {
        return Boletos.find({checkIn: false}).count();
    },
    conCheck: function () {
        return Boletos.find({checkIn: true}).count();
    },
    entregado: function () {
        return Boletos.find({kitEntregado: true}).count();
    },
    noEntregados: function () {
        return Boletos.find({kitEntregado: false}).count();
    },
    checkInCondition: function () {
        if (this.checkIn === true) {
            return "Si";
        } else {
            return "No";
        }
    },
    progressBarsCheckIn: function (tipo) {
        var conCheck = Boletos.find({checkIn: true}).count();
        var sinCheck = Boletos.find({checkIn: false}).count();

        //console.log('Con: ' + conCheck + ' Sin: ' + sinCheck);
        var total = conCheck / sinCheck * 100;
        if (tipo === true)
            return total;
        if (tipo === false)
            return 100 - total;
    },
    progressBarsKits: function (tipo) {
        var entregados = Boletos.find({kitEntregado: true}).count();
        var sinEntregar = Boletos.find({kitEntregado: false}).count();

        //console.log('entregados: ' + entregados + ' Sin entregar: ' + sinEntregar);
        var total = entregados / sinEntregar * 100;
        if (tipo === true)
            return total;
        if (tipo === false)
            return 100 - total;
    }
});

Template.dashboard.events({
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
    },
    "click #generarEntrega": function (e) {
        Meteor.call('generarEntrega', function (error, result) {
            if (error) {
                console.log("error", error);
            }
            if (result) {
                console.log("Kit entregado sin boleto con registro");
            }
        });
    }
});
