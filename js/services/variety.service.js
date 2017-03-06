(function(){
'use strict';

  angular.module('app').service('varietyService', service);

  service.$inject = ['$http', '$state', '$stateParams'];

  function service($http, $state, $stateParams){
    console.log("you're in service!");

    this.getAllVariety = getAllVariety;
    this.varietyById = varietyById;

    function getAllVariety(){
      return $http.get('http://localhost:5000/variety')
        .then(response => {
          return response.data;
          console.log(response.data);
        })
    }

    function varietyById(){
      return $http.get(`http://localhost:5000/variety`)
        .then(response => {
          const variety = response.data[0];
          console.log(variety);
          return variety;
        })
    }
  }

}());
