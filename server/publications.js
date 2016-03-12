Meteor.publish("boletos", function(){
  return Boletos.find();
});

Meteor.publish("ordenes", function(){
  return Ordenes.find();
});
