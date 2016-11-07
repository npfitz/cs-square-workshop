angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('details.html','');
$templateCache.put('home.html','<div class="image-grid">\n    <div ng-repeat="photo in home.photos">\n        <img class="tile" src="{{photo.images[0].url}}"/>\n    </div>\n</div>\n');
$templateCache.put('search.html','');
$templateCache.put('directives/example.html','<div class="example-directive">\n  <h1>Directive title: {{title}}</h1>\n  <p>This is an example of a directive, click me!</p>\n</div>\n');}]);