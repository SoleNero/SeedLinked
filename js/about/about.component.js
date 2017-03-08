(function(){
  angular.module('app')
  .component('about', {
      templateUrl:'js/about/about.template.heml',
      controller:controller
  })

  function controller(){
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
    };
  }
}());