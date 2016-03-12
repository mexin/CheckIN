Template.importDb.events({
  "click #read_boletos" : function(e) {
    var f = document.getElementById('fileInput2').files[0];
    console.log("read file");
    readFile(f, function(content) {
      Meteor.call('upload',content);
    });
  },
  "click #boletosFC" : function(e) {
    var f = document.getElementById('fileInput3').files[0];
    console.log("read file");
    readFile(f, function(content) {
      Meteor.call('uploadFC',content);
    });
  },
  "click #erase_boletos": function() {
    Meteor.call('removeAllBoletos', function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        console.log("La base de datos se limpio exitosamente");
      }
    });
  }
});

readFile = function(f,onLoadCallback) {
//When the file is loaded the callback is called with the contents as a string
  var reader = new FileReader();
  reader.onload = function (e) {
    var contents=e.target.result
    onLoadCallback(contents);
  }
  reader.readAsText(f);
};
