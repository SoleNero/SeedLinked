(function() {
    'use strict';
    angular.module('app')
        .component('mapComponent', {
            templateUrl: '/js/map/map.template.html',
            controller: controller
        });

        controller.$inject = ['NgMap', 'mapService'];

        function controller(NgMap, mapService) {
        const vm = this;

        vm.$onInit =onInit;
        // vm.placeMarker = placeMarker;


        function onInit(){
          NgMap.getMap().then(function(map) {
          vm.map = map;
        })
        mapService.allCities()
            .then(results => {
                var temp = {};
                for(var i=0; i<results.length; i++){
                    // console.log(results[i]['city']);
                    if(temp[results[i]['city']]){
                        temp[results[i]['city']]['variety_name'].push(results[i]['variety_name'])
                    } else {
                        temp[results[i]['city']]=results[i]
                        // console.log(temp[results[i]['city']]);
                        var variety = results[i]['variety_name']
                        temp[results[i]['city']]['variety_name']=[variety]
                    }
                }
                // console.log(temp)
                vm.results = [];
                for(var key in temp){
                    vm.results.push(temp[key])
                } 
                console.log(vm.results);   
         
            })
    }
     

 }
})();
