var favoritesArray = [];

var movieApp = angular.module("movieApp", []);


// Trying to set up servic to send input from OneController to TwoController
// movieApp.app.service("SendMovieSvc", function() {
// var inputToSend = {};
// console.log("in service");
// return {
//     getInput: function () {
//         return inputToSend;
//     },
//     setInput: function (value) {
//         inputToSend = value;
//     }
// }; // end return
// }); // end MovieApp.app


movieApp.controller("OneController", ["$scope", "MovieService", function($scope, MovieService){
  this.input = {
    title: ""
  };
  this.submit = function() {
    console.log("User clicked Submit", this.input);
    var input = this.input.title;
    MovieService.getOmdb(input);
    // console.log(input);


    // trying to send input to TwoController
    // SendMovieSvc.setInput(input);


  }; // end this.submit
     $scope.infoFromApi = MovieService.infoFromApi;
}]); // end OneController

movieApp.controller("TwoController", ["$scope", "MovieService", function($scope, MovieService){



  this.submit = function() {
    console.log("User clicked Add To Favorites", this.input);


  // trying to get input from OneController
  // $scope.$watch(function () { return SendMovieSvc.getInput(); }, function (newValue, oldValue) {
  //       if (newValue !== null) {
  //           $scope.inputToSend = newValue;
  //       }
  //   }, true);
  // console.log(newValue);


  }; // end this.submit
    //  $scope.infoFromOneController = OneController.infoFromOneController;
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
