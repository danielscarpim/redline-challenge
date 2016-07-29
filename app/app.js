'use strict';

// I split the controller, directives to different files and imported them below
import angular from 'angular';
import MainController from './components/controllers/MainController.js';
import section from './components/directives/section.js';
import dataFactory from './components/services/dataFactory.js'

// Stylesheets
import "!style!css!html5-boilerplate-npm/css/main.css";
import "!style!css!html5-boilerplate-npm/css/normalize.css";
import '!style!css!ionicons-npm/css/ionicons.css';
import './scss/main.scss';

// Images
import './images/favicon.png';


// Here I'm just declaring each component.
angular.module('myApp', [])
.controller('MainController', MainController)
.directive('section', section)
.factory('dataFactory', dataFactory)

// I removed ngRoute, since we are not using routing
