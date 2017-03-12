var opentokClient = angular.module('opentokClient', [
  'ngRoute',
  'opentok'
]);

opentokClient.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.
  when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  }).
  when('/:roomName', {
    templateUrl: 'views/room.html',
    controller: 'RoomController'
  }).
  otherwise({redirectTo:'/'});

  $locationProvider.html5Mode({
    enabled: true,
  });

}]);
