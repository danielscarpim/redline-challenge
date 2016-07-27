module.exports = function($scope, $sce) {
    $scope.redlinedata = {
        content: '<del>deleted</del> <insacc>accepted</insacc> <ins>inserted</ins>'
    };
    $scope.redlinedata.html = $sce.trustAsHtml($scope.redlinedata.content);
}
