angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('details.html','');
$templateCache.put('home.html','<div class="image-grid">\r\n    <div ng-repeat="photo in home.photos">\r\n        <img class="tile" src="{{photo.images[0].url}}"/>\r\n    </div>\r\n</div>');
$templateCache.put('search.html','');
$templateCache.put('directives/example.html','<div class="example-directive">\r\n  <h1>Directive title: {{title}}</h1>\r\n  <p>This is an example of a directive, click me!</p>\r\n</div>\r\n');}]);