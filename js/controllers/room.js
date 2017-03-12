opentokClient.controller('RoomController', ['$scope', '$routeParams', 'Session', 'OTSession', function($scope, $routeParams, Session, OTSession) {
  var roomName = $routeParams.roomName;
  Session.create(roomName).then(function(res) {
    OTSession.init('45790462', res.session_id, res.token)
    $scope.streams = OTSession.streams;
  });
}])
