/**
 * Created by Tauqeer Ahmed on 1/8/2016.
 */


var app = angular.module('mainApp', ['ngMaterial','ngMdIcons']);

app.controller('myCtrl', function ($scope) {

    $scope.itemsArray = [];
    $scope.AddItemTodoList = function () {
        if ($scope.todoitem) {
            $scope.itemsArray.push({item: $scope.todoitem, checked: false});
            $scope.todoitem = '';
            $scope.RemainingItemInList();
        }
    };
    $scope.RemainingItemInList = function () {

        $scope.count = $scope.itemsArray.length;
        for (var i = 0; i < $scope.itemsArray.length; i++) {
            if ($scope.itemsArray[i].checked) {
                $scope.count--;
            }
        }
    };
    $scope.DeleteSelectedItems = function () {

        var countItems = 0;
        for (var i = 0; i < $scope.itemsArray.length; i++) {

            if ($scope.itemsArray[i].checked) {
                $scope.itemsArray.splice(i--, 1);
            }
        }
    }


});