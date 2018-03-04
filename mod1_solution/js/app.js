(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.footTypes = ""
    $scope.message = "";
    $scope.checkLunchTypes = function() {
      $scope.footTypes = $scope.footTypes.trim();

      if ($scope.footTypes === "") {
        $scope.message = "Please enter data first.";
        $scope.noticeType = "danger";
      }
      else {
        var $footTypesArray = $scope.footTypes.split(",");
        var $length = $footTypesArray.length;
        if ( ($length <= 3) || ($length == 4 && $footTypesArray[3].trim() === "") ) {
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
