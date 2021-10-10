var app = angular.module('theDogaAPI', []);

app.controller('myController', myController);

function myController($scope, $http) {
  $scope.title = "API THEDOG";
  $scope.apiKey = 'b69855bc-bebe-416f-b0ca-fd688897899a'
  $scope.url = 'https://api.thedogapi.com/v1/';
  $scope.image = 'https://api.thedogapi.com/v1/images/';
  $scope.cdnImage = 'https://cdn2.thedogapi.com/images/';

  $scope.breed = [];
  $scope.BuscaRaca = [];
  $scope.DogImages = [];

  $scope.imagens = function () {
    $http
      .get(
        $scope.url + 'images/search?limit=15'
      )
      .success(function (dados) {
        $scope.DogImages = dados;
     });
  };

  $scope.listBreeds = function () {
    $http
      .get(
        $scope.url + 'breeds?limit=1000'
      )
      .success(function (dados) {
        $scope.breed = dados;
     });
  };

  $scope.searchBreed = function (nameBreed) {
    $http
      .get(
        $scope.url + 'breeds/search?q=' + nameBreed
      )
      .success(function (dados) {
        $scope.BuscaRaca = dados;
     });
  };

  $scope.initData = function () {
    $scope.imagens();
    $scope.listBreeds();
  };
}
