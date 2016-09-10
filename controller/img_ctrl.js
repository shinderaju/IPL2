/**
 * FileName:home.js
 * CreatedBy: raju
 * Purpose :controller for geting images
 */
angular.module('myApp').controller('imgCtrl', demo);
function demo($scope, teamService) {
  // method to fetch url of images
  $scope.getUrl = function(imgPath) {
      var storage = firebase.storage();
      var storageRef = storage.ref();
      storageRef.child(imgPath).getDownloadURL().then(function(url) {
          // Get the download URL for 'images/stars.jpg'
          // $scope.imgSrc = url;
         document.getElementById(imgPath).src = url;
      });
  }
}
