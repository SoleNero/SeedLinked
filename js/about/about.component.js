(function(){
  angular.module('app')
  .component('aboutComponent', {
      templateUrl:'js/about/about.template.html',
      controller:controller
  })

  function controller(){
    const vm = this;

    
    vm.$onInit = onInit;

    function onInit(){
    };
  }
}());