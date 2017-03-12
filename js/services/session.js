opentokClient.service('Session', ['$http', function($http) {
  return {
    create: function(roomName) {
      return $http.post('https://opentok-api.herokuapp.com/sessions?roomName=' + roomName).then(function(res) {
        return res.data;
      })
    }
  }
}]);
