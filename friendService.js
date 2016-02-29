angular.module('devApp').service('friendService', ['$http', function( $http ){
  var baseUrl = "http://connections.devmounta.in/";

  this.findFriends = function(userId, query){
    console.log(query);
    var url = baseUrl + 'api/friends/' + userId + '?name=' + query;
    console.log("URL: "+url);
    return $http.get(url);
  };
  this.addFriend = function(userId, friendId){
    var url = baseUrl + 'api/friends/' + userId;
    console.log("URL: "+url);
    return $http({
      method: 'PUT',
      url: url,
      data: { friendId: friendId }
    });
  };

}]);
