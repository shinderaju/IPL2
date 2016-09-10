/**
 * FileName:home.js
 * CreatedBy: raju
 * Date :30-08-2016
 * Purpose :controller for geting info all the teams
 */
angular.module('myApp').controller('homeCtrl', demo);
function demo($scope, $firebaseObject, teamService) {
    //get firebase object of teaminfo
    var fbref = firebase.database().ref("tean_info");
    var fbObject = $firebaseObject(fbref);
    // fetch general data of all the teams
    fbObject.$loaded().then(function(obj) {
        $scope.teamsData = obj;
    });

    $scope.changeTeam = function(teamName) {
        teamService.setTeam(teamName);
    };
    $scope.teamName = teamService.getTeam();


};
{/* <div ng-controller="imgCtrl" ng-init="{{getUrl($parent.teamData.team_img_url)}}">
  <img src="{{imgSrc}}"></img> */}
