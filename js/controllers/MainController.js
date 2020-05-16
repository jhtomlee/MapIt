app.controller('MainController', ['$scope', 'places', function($scope, places) {
  $scope.mapCenter = {
    lat: 39.951860, //40.741934,
    lng: -75.195130,//-74.004897,
    zoom: 17
  }
  places.success(function(data) {
    console.log("데이터", data)
    $scope.geodata = data;
    $scope.mapMarkers = geodataToMarkers($scope.geodata);
  });
  // $scope.mapMarkers = [
  //   {
  //     lat: 40.741389,
  //     lng: -74.003056,
  //     message: "111 Eighth Avenue"
  //   },
  //   {
  //     lat: 40.7425,
  //     lng: -74.006111,
  //     message: "Chelsea Market"
  //   }
  // ]
}]);