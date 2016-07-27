module.exports = function section() {
    return {
        restrict: 'E',
        templateUrl: '../templates/section.html',
        link: function (scope, element, attr) {
          let contentElement = angular.element(element[0].getElementsByClassName('content'));
        }
    };
}
