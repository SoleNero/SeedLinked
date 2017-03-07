(function(){
'use strict';

  angular.module('app').service('varietyService', service);

  service.$inject = ['$http', '$state', '$stateParams'];

  function service($http, $state, $stateParams){
    console.log("you're in service!");

    this.getAllVariety = getAllVariety;
    this.varietyById = varietyById;

    function getAllVariety(){
      return $http.get('https://seedlinked-api.herokuapp.com/variety')
        .then(response => {
          return response.data;
        })
    }

    function varietyById(id){
      return $http.get(`http://localhost:5000/variety/${id}`)
        .then(response => {
          const variety = response.data;
          return variety;
        })
    }
  }

}());
