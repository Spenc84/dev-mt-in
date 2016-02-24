angular.module('devApp').service('profileService', function(){
  var baseUrl = "http://connections.devmounta.in/";

  this.loadProfile = function(){
    if(localStorage.getItem('profile')) return JSON.parse(localStorage.getItem('profile'));
    // else return { friends: [{name: 'Larry'}, {name: 'Baruch'}, {name: 'Liz'}, {name: 'Vanessa'}, {name: 'John'}, {name: 'Leo'}, {name: 'Martin'}, {name: 'Daniel'}, {name: 'Joseph'}, {name: 'Haley'}]};
    else return { friends: [] };
  };
  this.saveProfile = function(profile){
    localStorage.setItem('profile', JSON.stringify(profile));
  };
  this.deleteProfile = function(){
    localStorage.removeItem('profile');
  };
});
