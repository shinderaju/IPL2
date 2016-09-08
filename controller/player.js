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
    //  var teamName = teamService.getTeam();
    teamService.setTeam($stateParams.team);
    $scope.team = $stateParams.team;
    var teamName = $stateParams.team.replace(/\s/g, '');
    var fbref = firebase.database().ref(teamName);
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function(obj) {
        //  console.log(JSON.stringify(obj));

        $scope.data = obj;
    });
    // var fbref1 = firebase.database().ref(teamName);
    // var fbObject1 = $firebaseObject(fbref1);
    fbref.orderByChild("player_name").equalTo("Akhil Herwadkar").on("child_added", function(data) {
        // console.log("Start at filter: " + data.val().player_name);
        $scope.data2 = data;
        // console.log("Start at filter:");

    });
    var fbref1 = firebase.database().ref("tean_info");
    fbref1.orderByChild("team_name").equalTo($scope.team).on("child_added", function(data) {
        console.log("Start at filter: " + data.val().team_img_url);
        $scope.data3 = data.val();
        //  console.log("Start at filter:",$scope.data3.team_img_url);
    });

};
