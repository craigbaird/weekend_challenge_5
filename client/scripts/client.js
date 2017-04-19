var movieApp = angular.module("movieApp", []);

movieApp.controller("OneController", ["MovieService", function(MovieService){
  var search = this;
  search.submit = function() {
    console.log("Searching for movie with title,", search);
    var input = search.input.title;
    MovieService.getOmdb(input);
  }; // end this.submit
     search.infoFromApi = MovieService.infoFromApi;
}]); // end OneController

movieApp.controller("TwoController", ["MovieService", function(MovieService){
  console.log("in TwoController");
  var favorite = this;

    favorite.favoritesClicked = function(){
      console.log(MovieService.infoFromApi);
      MovieService.addToFavorites(MovieService.infoFromApi);
    };

    favorite.addToFavorites = MovieService.addToFavorites;
}]); // end TwoController



movieApp.factory("MovieService", ["$http", function($http){

  var infoFromApi = {};
  var favoritesList = [];
  // Public
  return {
    infoFromApi : infoFromApi,
    getOmdb : function(input){
      var movie = input;
      $http.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&r=json").then(function(response){
        infoFromApi.response = response;
        console.log("data from Api", response);
      });// end $http.get
    }, // end getOmdb function


    //  addToFavorites : function(infoFromApi){
    //    var movie = infoFromApi;
    //    favoritesList.push(infoFromApi);
    //    console.log("info to push", infoFromApi);
    //  } // end addToFavorites

     addToFavorites : function(infoFromApi){
       var movie = infoFromApi;
       favoritesList.push(infoFromApi);
       console.log("info to push", infoFromApi);
     } // end addToFavorites



  }; // end return object
}]); // end factory
