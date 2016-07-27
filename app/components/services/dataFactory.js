module.exports = function($http){

    var dataFactory = {};
    var server = 'https://testing.smashdocs.net/documents/12345/';  // Dev

    dataFactory.save = function(data){
      console.log(data);
    }


    return dataFactory;
}
