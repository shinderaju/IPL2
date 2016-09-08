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
                // controller: 'team_ctrl',

            })
            .state('player', {
                url: '/player?team',
                templateUrl: 'template/player.html',
                // controller: 'player_ctrl',

            })
            .state('teaminfo', {
                url: '/teaminfo?team',
                templateUrl: 'template/teaminfo.html',
                // controller: 'player_ctrl',

            })
    });
