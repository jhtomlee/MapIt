var app = angular.module(

  // name of AngularJS app
  "NearMeApp", 

  // dependencies
  ['ngRoute','leaflet-directive','ngMaterial']
)

// define app's routes:
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'AboutController', 
      templateUrl: 'views/about.html' 
    })
    .when('/about', { 
      controller: 'AboutController', 
      templateUrl: 'views/about.html' 
    })
    .when('/main', { 
      controller: 'MainController', 
      templateUrl: 'views/main.html' 
    })
    .otherwise({ 
      redirectTo: '/about' 
    }); 
});