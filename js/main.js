import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import CommentsController from './controllers/comments.controller';

import PARSE from './constants/parse.constant';

import HomeService from './services/home.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('CommentsController', CommentsController)
  .service('HomeService', HomeService)
;