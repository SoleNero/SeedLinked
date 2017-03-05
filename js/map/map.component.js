// (function() {
//     'use strict';
//     angular.module('app')
//         .component('map', {
//             templateUrl: '/js/map/app.template.html',
//             controller: controller
//         });

//         console.log("I'm in MAP component");

//     function controller() {
//         const vm = this;

//         vm.$onInit = onInit;
        
//         function onInit() {
//             console.log("I'm in MAP component in onInit");
//         }
//     }
// }());

(function() {
    'use strict';
    angular.module('app')
        .component('mapComponent', {
            templateUrl: '/js/map/map.template.html',
            controller: controller
        });

        controller.$inject = ['$http', '$state', '$stateParams', 'NgMap'];

        function controller($http, $state, $stateParams, NgMap) {
        const vm = this;

          NgMap.getMap().then(function(map) {
          vm.map = map;
        })
 }
})();
