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
      lat: 39.951860, //40.741934,
      lng: -75.195130,//-74.004897,
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
      lat: Number($scope.latitude), //39.955002, 
      lng:  Number($scope.longitude), //-75.200493,
      zoom: 17
    }
    $scope.$apply();
    $location.path('/main')
    // searchPlaces.success(function(data) {
    //   console.log("데이터 search by location: ", data)
    //   $scope.geodata = data;
    //   $scope.mapMarkers = geodataToMarkers($scope.geodata);
      
    //   // $scope.$apply();
    //   $location.path('/main')
    // });
  }; 
}]);