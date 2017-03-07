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

    function varietyById(){
      return $http.get(`https://seedlinked-api.herokuapp.com/variety`)
        .then(response => {

          const variety = response.data;
          // console.log(variety);
          return variety;
        })
    }
  }

}());
