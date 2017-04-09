var movieApp = angular.module("movieApp", []);

movieApp.controller("OneController", ["$scope", "MovieService", function($scope, MovieService){
  this.input = {
    title: ""
  };
  this.submit = function() {
    console.log("User clicked Submit", this.input);
    var input = this.input.title;
    MovieService.getOmdb(input);
  }; // end this.submit
     $scope.infoFromApi = MovieService.infoFromApi;
}]); // end OneController

movieApp.controller("TwoController", ["$scope", "MovieService", function($scope, MovieService){
  this.submit = function() {
    console.log("User clicked Add To Favorites", this.input);

    // add movie to favorites list
    
  }; // end this.submit

}]); // end TwoController

movieApp.factory("MovieService", ["$http", function($http){

  var infoFromApi = {};
  // Public
  return {
  // input from controller one
    infoFromApi : infoFromApi,
    getOmdb : function(input){
      // var movie = "Big";
      var movie = input;
      $http.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&r=json").then(function(response){
        infoFromApi.response = response;
        console.log(response);
      }); // end $http.get
    } // end getOmdb function

  }; // end return object
}]); // end factory
