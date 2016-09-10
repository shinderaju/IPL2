/**
 * FileName:player.js
 * CreatedBy: raju
 * Date :30-08-2016
 *controller for fecth particular team and player data
 *
 */
angular.module('myApp').controller('playerCtrl', demo1);
function demo1($scope, $firebaseObject, $stateParams, teamService) {
    //teamService.setTeam($stateParams.team);
    $scope.team = $stateParams.team;
    var teamName = $stateParams.team.replace(/\s/g, '');
    var fbref = firebase.database().ref(teamName);
      // console.log("teamname",teamName);
    var fbObject = $firebaseObject(fbref);
    // fetch data of all the players of one team
    fbObject.$loaded().then(function(obj) {
        $scope.playersInfo = obj;
        // console.log("team",obj);

    });
    //fetch data of particular player of a team
    $scope.playerinfo = function(playername) {
        fbref.orderByChild("player_name").equalTo(playername).on("child_added", function(data) {
            $scope.playerInfo = data.val();
        });
    }
    //fetch general data excluding players data of particular team
    var fbref1 = firebase.database().ref("tean_info");
    fbref1.orderByChild("team_name").equalTo($scope.team).on("child_added", function(data) {
        $scope.teamInfo = data.val();
    });

};
