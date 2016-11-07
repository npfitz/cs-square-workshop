function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home',
    resolve: {
      // Example showing returning of custom made promise
      images: function($q, _500px){
        var deferred = $q.defer();

        _500px.api('/photos', {image_size: 3, term: 'cats', rpp: 40}, function (response) {

             deferred.resolve(response.data.photos);

        });

        return deferred.promise;
      }
    }


  }).state('Details', {
    url: '/details/:imageId',
    controller: 'DetailsCtrl as details',
    templateUrl: 'details.html',
    title: 'Details',
    resolve: {
      // Example showing returning of custom made promise
      image: function($q, $stateParams, _500px){
        var deferred = $q.defer();

        //noinspection JSUnresolvedVariable
        var url = '/photos/' + $stateParams.imageId;
        console.log(url);
        _500px.api(url, {image_size: 3, rpp: 40}, function (response) {

          console.log(response.data.photo);
          deferred.resolve(response.data.photo);

        });

        return deferred.promise;
      }
    }


  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
