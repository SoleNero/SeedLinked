(function() {
  'use strict';
  angular.module("app")
    .component("app", {
      templateUrl: '/js/app/app.template.html',
      controller: controller
    });

    function controller(){
      const vm = this;

      vm.googleMapsUrl = 'https://maps.google.com/maps/api/js';
      vm.$onInit = onInit;

      function onInit (){

      }
    }
}());