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

        vm.$onInit = onInit;

        function onInit(){
          NgMap.getMap().then(function(map) {
          vm.map = map;
        })

        vm.showCity = function showCity(e,id){
            vm.currentCity = vm.results[id];
            vm.map.showInfoWindow('info-window', this);

        }

        mapService.allCities()
            .then(results => {
                // console.log("results ", results)
                var temp = {};
                for(var i=0; i<results.length; i++){
                    // console.log(results[i]['city_name']);
                    if(temp[results[i]['city_name']]){
                        temp[results[i]['city_name']]['variety_name'].push(results[i]['variety_name'])
                    } else {
                        temp[results[i]['city_name']]=results[i]
                        // console.log(temp[results[i]['city_name']]);
                        var variety = results[i]['variety_name']
                        temp[results[i]['city_name']]['variety_name']=[variety]
                    }
                }
                // console.log(temp)
                vm.results = [];
                for(var key in temp){
                    vm.results.push(temp[key])
                } 
                // console.log(vm.results);   
            })
    }
 }
})();
