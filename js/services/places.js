app.factory('places', ['$http', function ($http) {
  return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=39.951860%7C-75.195130&gslimit=30&format=json&callback=JSON_CALLBACK')
    .success(function (data) {
      return data;
    })
    .error(function (err) {
      return err;
    });
}]);

app.factory('searchPlaces', ['$http', function ($http) {
  var inputCoord = {}
  inputCoord.getAlgo = function(lat, lng){
    console.log("SIRVIO! : ", lat, lng)
    return $http.jsonp(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=${lat}%7C${lng}&gslimit=30&format=json&callback=JSON_CALLBACK`)
    .success(function (data) {
      console.log("dataaaa", data)
      return data;
    })
    .error(function (err) {
      return err;
    });
  }
  return inputCoord;
}]);
