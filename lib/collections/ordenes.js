Ordenes = new Mongo.Collection("ordenes");

Ordenes.initEasySearch(['nombre', 'email', 'ordenId'], {
    'limit' : 20,
    'use' : 'mongo-db'
});
