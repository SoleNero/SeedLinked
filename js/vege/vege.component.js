(function() {
  angular.module('app')
  .component('vegeComponent', {
     templateUrl: '/js/vege/vege.template.html',
     controller: controller
  })

    controller.$inject = ['$stateParams', '$state', 'vegeService'];

    function controller(){
      const vm = this;

        vm.$onInit =onInit;
        vm.getVariety = getVariety;

        function onInit() {
          console.log("You're in vege component");
        }

        function getVariety(){
          vegeService.varietyById($stateParams.id).then(variety => vm.variety = variety);
        }
    }
}());

