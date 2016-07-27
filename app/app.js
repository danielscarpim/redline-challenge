'use strict';

import angular from 'angular';

import Controller from './components/controllers/Controller.js';
import section from './components/directives/section.js';
import dataFactory from './components/services/dataFactory.js'
// Stylesheets
import './scss/main.scss';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.controller('Controller', Controller)
.directive('section', section)
.factory('dataFactory', dataFactory)
  //'ngRoute',
  //'redlineDirective'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
