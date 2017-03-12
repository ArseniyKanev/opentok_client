opentokClient.controller('HomeController', ['$scope', '$window', function($scope, $window) {
  $scope.goToRoom = function() {
    console.log('azaza');
    $window.open('/' + $scope.roomName, '_self');
  }
}]);
