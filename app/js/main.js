import angular from 'angular';
import angularMaterial from 'angular-material';
import API500px from '500px';

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ngMaterial',
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// setup 500px api 
let api500px = new API500px('UBTP38hDiytkoDnEI9O3KQCVHUvs09uUrqJOHXgk');

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('api500px', api500px);
angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

