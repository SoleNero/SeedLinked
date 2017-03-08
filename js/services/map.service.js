(function(){
  angular
  .module('app')
  .service('mapService', service);


service.$inject = ['$http', '$state', '$stateParams'];

  function service ($http, $state, $stateParams){

    this.allCities = allCities;
    this.getAllVarieties = getAllVarieties;
    this.getCitiesByVariety = getCitiesByVariety;



    function allCities(){
      return $http.get('https://seedlinked-api.herokuapp.com/city_varieties')
        .then(response => response.data);
    }

    function getAllVarieties(){
      return $http.get('http://localhost:5000/variety/')
        .then(response => {
          return response.data;
        })
    }

    function getCitiesByVariety(){
      return $http.get('http://localhost:5000/city_varieties')
      .then(response => {
          return response.data;
      })
    }
  }
}());

