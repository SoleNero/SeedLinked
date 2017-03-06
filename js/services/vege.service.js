(function(){

angular
.module('app')
.service('vegeService', service);

service.$inject = ['$http', '$state', '$stateParams'];

    function service ($http, $state, $stateParams) { 
      this.varietyById = varietyById;


      function varietyById(){
        return $http.get(`http://localhost:5000/variety${id}`)
          .then(response => {
            const variety = response.data
            return variety;
          })
 }
}());