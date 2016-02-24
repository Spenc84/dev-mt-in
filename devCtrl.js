angular.module('devApp').controller('devCtrl', ['$scope', 'profileService', '$http', function( $scope, profileService, $http ){
  //Sorting Controls
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
      }).catch(function(err){
        console.log(err);
      });
    }
  }.call();
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

}]);
