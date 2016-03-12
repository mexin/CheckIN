Template.demo.helpers({
    demoData: function () {
        return Boletos.find({}, {limit: 5})
    }
});

Template.demo.events({
    //add your events here
});

Template.demo.onCreated(function () {
    //add your statement here
});

Template.demo.onRendered(function () {
    //add your statement here
});

Template.demo.onDestroyed(function () {
    //add your statement here
});

