angular.module('myApp').controller('img_ctrl', demo);

function demo($scope, teamService) {
    //$scope.getUrl = function() {
    imgpath = teamService.getTeam();
    console.log("teampath", teampath);
    var i=0;
    angular.forEach('teampath', function(value, prop, obj) {
        console.log('team_img_url',   teampath[i++].team_img_url); // Todd, UK
      //  console.log(prop); // name, location
        //console.log(obj); // { name: 'Todd', location: 'UK' }, { name: 'Todd', location: 'UK' }
        var storage = firebase.storage();
        var storageRef = storage.ref(imgpath[i++].team_name);
        storageRef.getDownloadURL().then(function(url) {
            // Get the download URL for 'images/stars.jpg'
            document.getElementById(imgpath.team_name).src = url;
            //  console.log($scope.data);
        });
    });


    //}
}
