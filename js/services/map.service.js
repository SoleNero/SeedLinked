(function(){
  angular
  .module('app')
  .service('mapService', service);


service.$inject = ['$http', '$state', '$stateParams'];

  function service ($http, $state, $stateParams){

    this.allCities = allCities;



    function allCities(){
      return $http.get('http://localhost:5000/city_varieties')
        .then(response => response.data);
    }
  }
}());

