(function(){
  angular
  .module('app')
  .service('mapService', service);


service.$inject = ['$http', '$state', '$stateParams'];

  function service ($http, $state, $stateParams){

    this.allCities = allCities;
    // this.markers = markers;

  console.log("you're in map service");

    function allCities(){
      return $http.get('http://localhost:5000/city_varieties')
        .then(response => response.data);
    }
  }
}());

