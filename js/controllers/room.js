opentokClient.controller('RoomController', [
  '$scope',
  '$routeParams',
  'Session',
  'OTSession',
  'API_KEY',
  function($scope, $routeParams, Session, OTSession, API_KEY) {
    var roomName = $routeParams.roomName;
    Session.create(roomName).then(function(res) {
      OTSession.init(API_KEY, res.session_id, res.token)
      $scope.streams = OTSession.streams;
    });
  }
])
