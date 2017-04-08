var movieApp = angular.module("movieApp", []);

movieApp.controller("OneController", ["$scope", "MovieService", function($scope, InfoService){
  InfoService.getOmdb();
  $scope.infoFromApi = InfoService.infoFromApi;

}]); // end OneController

movieApp.controller("TwoController", ["$scope", "MovieService", function($scope, InfoService){

}]); // end TwoController

movieApp.factory("MovieService", ["$http", function($http){
  var infoFromApi = {};
  // Public
  return {
    infoFromApi : infoFromApi,
    getOmdb : function(){
      var movie = "Batman Begins";
      // var movie = element(by.exactBinding("movie"));
      $http.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&r=json").then(function(response){
        infoFromApi.response = response;
        console.log(response);
      }); // end $http.get
    } // end getOmdb function
  }; // end return object
}]); // end factory
