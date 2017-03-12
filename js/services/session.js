opentokClient.service('Session', ['$http', 'API_URL', function($http, API_URL) {
  return {
    create: function(roomName) {
      return $http.post(API_URL + '/sessions?roomName=' + roomName).then(function(res) {
        return res.data;
      })
    }
  }
}]);
