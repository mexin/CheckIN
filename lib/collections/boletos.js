Boletos = new Mongo.Collection("boletos");

Boletos.initEasySearch(['nombre', 'email', 'ticketId'], {
    'limit' : 20,
    'use' : 'mongo-db'
});
