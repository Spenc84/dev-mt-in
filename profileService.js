angular.module('devApp').service('profileService', ['$http', function( $http ){
  var baseUrl = "http://connections.devmounta.in/";

  //CRUD operations
  this.getProfile = function(profileId){
    return $http({
      method: 'GET',
      url: baseUrl + 'api/profiles/' + profileId
    }).then(function(res){
      console.log(res);
      return res;
    }).catch(function(err){
      console.log(err);
    });

  };
  this.saveProfile = function(profile){
    return $http({
      method: 'POST',
      url: baseUrl + 'api/profiles/',
      data: profile
    }).then(function(res){
      console.log(res);
      localStorage.setItem('profileId', JSON.stringify({ pId: res.data._id }));
    }).catch(function(err){
      console.log(err);
    });
  };
  this.deleteProfile = function(){
    var profileId = JSON.parse(localStorage.profileId);

    return $http({
      method: 'DELETE',
      url: baseUrl + 'api/profiles/' + profileId.pId
    });
  };

}]);
