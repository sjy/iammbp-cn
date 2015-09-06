'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('mbpApp', ['ngRoute']);

myApp.controller('mainController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
        $scope.pageName = '首页';
        $scope.coachNames = ['Enrique Meza Jr', 'Agustín Lleida ', 'Javier Mier ', 'Jaime Lozano', 'Pablo Bonells'];
        $scope.scrollTo = function (section, path) {
            if (path) {
                $location.path('/' + path);
                setTimeout(function () {
                    $.fn.fullpage.moveTo(section);
                }, 800);
            } else {
                $.fn.fullpage.moveTo(section);
            }

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
                when('/home', {
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

myApp.directive('footer', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        scope: true,
        transclude: false,
        templateUrl: "directives/footer.html",
        controller: 'mainController'
    };
});