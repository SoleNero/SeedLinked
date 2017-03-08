(function(){
  'use strict';

angular.module("app")
  .config(config);
  

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  
  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)
    

    $stateProvider
    .state({
      name: 'app',
      abstract: true,
      component: 'app',
    })
    .state({
      name: 'about',
      parent: 'app',
      url: '/',
      component: 'aboutComponent'
    })
    .state({
      name: 'map',
      parent: 'app',
      url: '/map',
      component: 'mapComponent'
    })
    .state({
      name: 'variety',
      parent: 'app',
      url: '/:id',
      component: 'varietyComponent'
    })
    
  }
}());
