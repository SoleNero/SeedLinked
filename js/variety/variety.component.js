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
        vm.getVariety = getVariety;


        function getVariety() {
          varietyService.getAllVariety()
          .then(varieties => vm.varieties = varieties);
        }

        function onInit() {
          varietyService.varietyById($stateParams.id)
          .then(variety => {
            vm.variety = variety;  
          });                
        }
    }
}());

