var app = angular.module(

  // name of AngularJS app
  "NearMeApp", 

  // dependencies
  ['ngRoute','leaflet-directive']
)

// define app's routes:
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/main.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});