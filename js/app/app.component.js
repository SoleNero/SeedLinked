(function() {
  'use strict';
  angular.module('app')
    .component('appComponent', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });

    function controller(){
      const vm = this;

      vm.$onInit = onInit;

      function onInit (){
        console.log("I'm in app.component");
      }
    }
})