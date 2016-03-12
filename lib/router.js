Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('boletos');
    }
});


Router.route('/', {
    name: 'demo',
    waitOn: function () {
        return [
            Meteor.subscribe("boletos")
        ]
    }
});

Router.route('/checkin', {
    name: 'main',
    waitOn: function () {
        return [
            Meteor.subscribe("boletos")
        ]
    }
});

Router.route('/import', {
    name: 'importDb'
});

Router.route('/dashboard', {
    name: 'dashboard',
    waitOn: function () {
        return [
            Meteor.subscribe("boletos")
        ]
    }
});
