/**
 * perform routing according to state
 */
angular.module('myApp', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'template/home.html',
            })
            .state('player', {
                url: '/player?team',
                templateUrl: 'template/player.html',
            })
            .state('teaminfo', {
                url: '/teaminfo?team',
                templateUrl: 'template/teaminfo.html',
            })
            .state('player.playerinfo', {
                url: '/playerinfo?player',
                templateUrl: 'template/playerinfo.html',
            })
    });
