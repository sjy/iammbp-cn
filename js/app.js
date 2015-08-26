'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('mbpApp', ['ngRoute']);

myApp.controller('mainController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
        $scope.pageName = '首页';
        $scope.scrollTo = function (id) {
            $location.hash(id);
            $anchorScroll();
        };
        $scope.changeName = function (name) {
            $scope.pageName = name;
            $anchorScroll();
        };
        $scope.changeParentName = function (name) {
            $scope.$parent.pageName = name;
            $anchorScroll();
        };
    }]);

myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'mainController'
                }).
                when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'mainController'
                }).
                when('/contact', {
                    templateUrl: 'views/contact.html',
                    controller: 'mainController'
                }).
                when('/cases', {
                    templateUrl: 'views/cases.html',
                    controller: 'mainController'
                }).
                when('/academy', {
                    templateUrl: 'views/academy.html',
                    controller: 'mainController'
                }).
                when('/coach', {
                    templateUrl: 'views/coach.html',
                    controller: 'mainController'
                }).
                otherwise({
                    redirectTo: '/'
                });
    }
]);

myApp.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
            input.push(i);
        return input;
    };
});
