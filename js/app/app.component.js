(function() {
  'use strict';
  angular.module("app")
    .component("app", {
      templateUrl: '/js/app/app.template.html',
      controller: controller
    });
    console.log("I'm in app.component");

    function controller(){
      const vm = this;

      vm.$onInit = onInit;

      function onInit (){
        console.log("I'm in app.component in onInit");
      }
    }
}());