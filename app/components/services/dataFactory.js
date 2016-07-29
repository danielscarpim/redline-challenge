
// This service handles all server calls

module.exports = function($http){

    var dataFactory = {};
    var server = 'https://testing.smashdocs.net/documents/12345/';

    dataFactory.submit = function(action, content){
      // Config for qte request
      var req = {
         method: 'POST',
         url: 'https://testing.smashdocs.net/documents/12345/'+action,
         headers: {
           'Content-Type': "application/json"
         },
         data: { content: content }
      }
      $http(req)
      .then(function success(response){
        // If the service existed we would send the data here
        console.log('success sending data');

      }, function error(response){
        // Errors are logged here
        console.log("Action:", action);
        console.log("Data:", req.data);
        console.log("Response:", response);
        console.log("Status", response.status);
      });
    }


    return dataFactory;
}
