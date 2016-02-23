angular.module('devApp').controller('devCtrl', function( $scope ){
  $scope.myProfile = { friends: [{name: 'Larry'}, {name: 'Baruch'}, {name: 'Liz'}, {name: 'Vanessa'}, {name: 'John'}, {name: 'Leo'}, {name: 'Martin'}, {name: 'Daniel'}, {name: 'Joseph'}, {name: 'Haley'}]};
  $scope.sortOptions = [{display: 'Ascending', value: false},
                        {display: 'Descending', value: true}];
  $scope.sortReverse = false;
});
