function HomeCtrl($scope, $timeout, _500px) {
  'ngInject'
  // ViewModel
  const vm = this;

  _500px.api('/photos', {image_size: 3, term: 'cats', rpp: 40}, function (response) {
    $timeout(function(){
      vm.photos = response.data.photos;
    })
  });


}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
