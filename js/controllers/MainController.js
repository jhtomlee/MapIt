app.controller('MainController', ['$scope', '$mdSidenav', '$location','places','searchPlaces', function($scope, $mdSidenav, $location, places, searchPlaces) {
  $scope.toggleSideBar = function() { 
    $mdSidenav('left').toggle();
  }; 
  // $scope.latitude = '39.955002' ;
  // $scope.longitude = '-75.200493' ;
  $scope.latitude = '40.741934' ;
  $scope.longitude = '-74.004897' ;

  $scope.startLocation = function() { 

    $scope.mapCenter = {
      lat: 39.951860, 
      lng: -75.195130,
      zoom: 17
    }
    places.success(function(data) {
      console.log("데이터", data)
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
      $location.path('/main')
    });
  }; 

  $scope.searchLocation = function() { 
    console.log('button pressed!: ', $scope.latitude, $scope.longitude)
    $scope.toggleSideBar();
    console.log(Number($scope.latitude), Number($scope.longitude))
    $scope.mapCenter = {
      lat: Number($scope.latitude), 
      lng:  Number($scope.longitude), 
      zoom: 17
    }
    $scope.$apply();
    searchPlaces.getAlgo($scope.mapCenter.lat, $scope.mapCenter.lng).success(function(data) {
      console.log("데이터 search by location: ", data)
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
    });
    $location.path('/main')
  }; 
}]);