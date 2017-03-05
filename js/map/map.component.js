(function() {
    'use strict';
    angular.module('app')
        .component('map', {
            templateUrl: '/js/map/app.template.html',
            controller: controller
        });

        console.log("I'm in MAP component");

    function controller() {
        const vm = this;

        vm.$onInit = onInit;
        
        function onInit() {
            console.log("I'm in MAP component in onInit");
        }
    }
}());
