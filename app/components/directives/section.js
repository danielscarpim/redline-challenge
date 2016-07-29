module.exports = function section(dataFactory) {
    return {
        restrict: 'E',
        templateUrl: '../templates/section.html',
        link: function (scope, element, attr) {
          let contentElement = angular.element(element[0].getElementsByClassName('content'));

          // Every button calls this function passing the action as a parameter
          scope.action = function(action){
            // then calls the dataFactory passing the action and the content
            dataFactory.submit(action, contentElement[0].innerHTML);
          }
        }
    };
}
