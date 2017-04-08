var movieApp = angular.module("movieApp", []);

movieApp.controller("OneController", ["$scope", "MovieService", function($scope, MovieService){
  this.input = {
    title: ""
  };
  this.submit = function() {
    console.log('User clicked submit', this.input);
    // var title = this.input;
    // return title;
  };


}]); // end OneController

movieApp.controller("TwoController", ["$scope", "MovieService", function($scope, MovieService){
  MovieService.getOmdb();
  $scope.infoFromApi = MovieService.infoFromApi;

}]); // end TwoController

movieApp.factory("MovieService", ["$http", function($http){

  var infoFromApi = {};

  // Public
  return {

  // input from controller one


    infoFromApi : infoFromApi,
    getOmdb : function(){
      var movie = "The Sandlot";
      // var movie = element(by.exactBinding("movie.name"));
      $http.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&r=json").then(function(response){
        infoFromApi.response = response;
        console.log(response);
      }); // end $http.get
    } // end getOmdb function

  }; // end return object
}]); // end factory
