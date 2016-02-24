angular.module('devApp').controller('devCtrl', ['$scope', 'profileService', function( $scope, profileService ){
  $scope.myProfile = profileService.loadProfile();
  $scope.sortOptions = [{display: 'Ascending', value: false},
                        {display: 'Descending', value: true}];
  $scope.sortReverse = false;
  $scope.editing = false;
  $scope.editButton = "Edit";
  $scope.edit = function(){
    if(!$scope.editing)
      $scope.editButton = "Editing: ";
    else
      $scope.editButton = "Edit";
    $scope.editing = !$scope.editing;
  };

  $scope.saveProfile = function(profile){
    profileService.saveProfile(profile);
    $scope.edit();
  };
  $scope.deleteProfile = function(){
    profileService.deleteProfile();
    $scope.myProfile = profileService.loadProfile();
  };
}]);
