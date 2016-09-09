angular.module('myApp').controller('img_ctrl', demo);

function demo($scope, teamService) {
  $scope.getUrl = function(data) {
      var storage = firebase.storage();
      var storageRef = storage.ref();
      storageRef.child(data).getDownloadURL().then(function(url) {
          // Get the download URL for 'images/stars.jpg'
         document.getElementById().src = url;

          // var myEl = angular.element( document.querySelector( '#data' ) );
          // myEl.attr('src',url);


      });
  }
}
