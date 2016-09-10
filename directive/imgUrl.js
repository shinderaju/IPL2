/*
* FileName:imgUrl.js
* CreatedBy: raju
* purpose : directive for download img from firebase
* @ param {String} -data
*/
angular.module('myApp').directive('imgUrl', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'template/img.html',
        controller: ['$scope', '$http', function($scope, $http) {
            $scope.getUrl = function() {
                var storage = firebase.storage();
              //   console.log("foto url", $scope.data);
                var storageRef = storage.ref($scope.data);
                storageRef.getDownloadURL().then(function(url) {
                    document.getElementById($scope.data).src = url;
                });
            }
        }],
        link: function($scope, element, attribute) {
             $scope.getUrl();
            //$scope.$watch('$scope.data',$scope.getUrl);
        }
    }
});
