function DetailsCtrl($scope, image) {
  'ngInject'
  // ViewModel
  const vm = this;
  vm.photo = image;
}

export default {
  name: 'DetailsCtrl',
  fn: DetailsCtrl
};
