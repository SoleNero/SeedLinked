(function () {
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
        vm.results = [];
        vm.getSelectedText = getSelectedText;
        vm.getVarieties = getVarieties;
        vm.data = [];
        vm.selectedItem;

        vm.demoFunc = demoFunc;

        function onInit() {
            NgMap.getMap().then(function (map) {
                vm.map = map;
            })

            vm.showCity = function showCity(e, id) {
                vm.currentCity = vm.results[id];
                vm.map.showInfoWindow('info-window', this);

            }

            mapService.allCities()
                .then(results => {
                    var temp = {};
                    for (var i = 0; i < results.length; i++) {
                        if (temp[results[i]['city_name']]) {
                            temp[results[i]['city_name']]['variety_name'].push(results[i]['variety_name'])
                        } else {
                            temp[results[i]['city_name']] = results[i]
                            var variety = results[i]['variety_name']
                            temp[results[i]['city_name']]['variety_name'] = [variety]
                        }
                    }
                    for (var key in temp) {
                        vm.results.push(temp[key])
                    }
                })
            getVarieties();
        }

        function getVarieties() {
            mapService.getAllVarieties()
                .then(varieties => {
                    vm.varieties = varieties;
                })
        }

        // temporary filter function
            vm.amishGold = {city_name: ["Arlington", "Artesia", "Chazy", "East Lansing", "Ithaca", "Los Lunas"]};
            vm.Baller ={city_name: ["Chazy", "Chickasha", "Farmington", "Ithaca", "Landisville", "Los Lunas"]};
            vm.berwickGerman={city_name: ["Arlington", "Capac", "Carrington", "Chatham", "Chazy", "Chippewa Falls", "Cobleskill", "Cooperstown", "East Lansing", "Lake City", "Lancaster", "LeRoy", "Lexington", "Los Lunas", "Minot"]}
            vm.random = {city_name: ['Rexburg', 'Moccasin', 'Las Cruces', 'Huntley', 'Chickasha']}    

                function demoFunc() {
                if(vm.selectedItem.variety_name == 'Amish Gold'){
                    vm.selectedItem = vm.amishGold;
                }else if(vm.selectedItem.variety_name == 'Baller'){
                    vm.selectedItem = vm.Baller;
                }else if(vm.selectedItem.variety_name == 'Berwick German'){
                    vm.selectedItem = vm.berwickGerman;
                }else{
                    vm.selectedItem = vm.random;
                }
        }

        // fix it! 
        function getSelectedText() {
            // vm.clickOutsideToClose = false;            
            mapService.allCities()
                .then(data => {
                    var temp = {};
                    for (let i = 0; i < data.length; i++) {
                        if (temp[data[i]['variety_name']]) {
                            temp[data[i]['variety_name']]['city_name'].push(data[i]['city_name'])
                        } else {
                            temp[data[i]['variety_name']] = data[i]
                            var city = data[i]['city_name']
                            temp[data[i]['variety_name']]['city_name'] = [city]
                        }
                    }
                    for (var key in temp) {
                        vm.data.push(temp[key])
                        // console.log(temp);
                    }
                    // console.log(vm.data.variety_name);
                    // vm.selectedItem = vm.data;
                })
        }
    }
})();
