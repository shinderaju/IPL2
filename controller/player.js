/**
 * FileName:home.js
 * CreatedBy: raju
 * Date :30-08-2016
 *
 */
/**
 *controller for fecth particular team data
 *
 */
angular.module('myApp').controller('player_ctrl', demo1);
/*
 * Purpose : function to set object of firebase
 */
function demo1($scope, $firebaseObject, $stateParams, teamService) {

    teamService.setTeam($stateParams.team);
    $scope.team = $stateParams.team;
    var teamName = $stateParams.team.replace(/\s/g, '');
    var fbref = firebase.database().ref(teamName);
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function(obj) {
        $scope.data = obj;
    });

    $scope.playerinfo = function(playername) {
        fbref.orderByChild("player_name").equalTo(playername).on("child_added", function(data) {
            $scope.data2 = data.val();
        });
    }

    var fbref1 = firebase.database().ref("tean_info");
    fbref1.orderByChild("team_name").equalTo($scope.team).on("child_added", function(data) {
        $scope.data3 = data.val();
    });

};
