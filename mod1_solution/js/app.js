(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.foodtypes = ""
    $scope.message = "";
    $scope.checkLunchTypes = function() {
      $scope.foodtypes = $scope.foodtypes.trim();

      if ($scope.foodtypes === "") {
        $scope.message = "Please Enter Data First.";
        $scope.noticeType = "danger";
      }
      else {
        var $foodTypesArray = $scope.foodtypes.split(",");
        var $length = $foodTypesArray.length;
        if ( ($length <= 3) || ($length == 4 && $foodTypesArray[3].trim() === "") ) {
          $scope.message = "Enjoy!";
          $scope.noticeType = "success";
        }
        else {
          $scope.message = "Too much!";
          $scope.noticeType = "warning";
        }
      }
    };
  }
})();
