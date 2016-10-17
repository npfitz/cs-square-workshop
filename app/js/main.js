import angular from 'angular';
import angularMaterial from 'angular-material';

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
_500px.init({
  sdk_key: 'a584e6e0dfbbb816269e61e8cfd1a64362cd980f'
});

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('_500px', _500px);
angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

