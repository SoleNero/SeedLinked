(function() {
    'use strict';
    angular.module('app')
        .component('map', {
            templateUrl: 'js/map/map.template.html',
            controller: MapController
        });

    function MapController() {
        const vm = this;

        vm.$onInit = onInit;
        


        function onInit() {
            console.log("I'm in my component");
        }
    }
}());
