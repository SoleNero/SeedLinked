(function(){
  angular.module('app')
  .component('aboutComponent', {
      templateUrl:'js/about/about.template.html',
      controller:controller
  })

  function controller(){
    const vm = this;
      console.log("you're in about component in controller'");
    
    vm.$onInit = onInit;

    function onInit(){
      console.log("you're in about component in oninit'");
    };
  }
}());