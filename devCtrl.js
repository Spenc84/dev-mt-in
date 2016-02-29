angular.module('devApp').controller('devCtrl', ['$scope', 'profileService', 'friendService', '$http', function( $scope, profileService, friendService, $http ){
  //Friend Sorting Controls
  $scope.sortOptions = [{display: 'Ascending', value: false},
                        {display: 'Descending', value: true}];
  $scope.sortReverse = false;

  //Profile Editing Controls
  $scope.editing = false;
  $scope.editButton = "Edit";
  $scope.edit = function(){
    if(!$scope.editing)
      $scope.editButton = "Editing: ";
    else
      $scope.editButton = "Edit";
    $scope.editing = !$scope.editing;
  };

  //CRUD operations
  $scope.loadProfile = function(){
    if(localStorage.profileId){
      var proId = JSON.parse(localStorage.profileId);

      profileService.getProfile(proId.pId)
      .then(function(res){
        $scope.myProfile = res.data;
        console.log(res.data);
      }).catch(function(err){
        console.log(err);
      });
    }
  }
  $scope.loadProfile();
  $scope.saveProfile = function(profile){
    profileService.saveProfile(profile);
    $scope.edit();
  };
  $scope.deleteProfile = function(){
    profileService.deleteProfile()
    .then(function(res){
      localStorage.removeItem('profileId');
      $scope.myProfile = {};
    })
    .catch(function(err){
      console.log(err);
    });
  };
  $scope.findFriends = function(query){
    friendService.findFriends($scope.myProfile._id, query)
    .then(function(res){
      $scope.potentialFriends = res.data;
    })
    .catch(function(err){
      console.log(err);
    });
    $scope.findFriend.name = "";
  };
  $scope.addFriend = function(friendId){
    friendService.addFriend($scope.myProfile._id, friendId)
    .then(function(res){
      $scope.loadProfile();
    });
  };
}]);
