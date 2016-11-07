function HomeCtrl($scope, images) {
  'ngInject'
  // ViewModel
  const vm = this;
  vm.photos = images;





}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
