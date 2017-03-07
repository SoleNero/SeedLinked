(function() {
  angular.module('app')
  .component('varietyComponent', {
     templateUrl: '/js/variety/variety.template.html',
     controller: controller,
     bindings: {
        variety: '<'
      }
  })

    controller.$inject = ['$stateParams', '$state', 'varietyService'];

    function controller($stateParams, state, varietyService){
      const vm = this;

        vm.$onInit =onInit;

         function onInit(){
          varietyService.varietyById($stateParams.id)
          .then(variety => {
            vm.variety = variety;
            console.log(variety);
          })
        }
    }
}());     