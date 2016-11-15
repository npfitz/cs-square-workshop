function DetailsCtrl($scope, image) {
  'ngInject'
  // ViewModel
  const vm = this;
  vm.photo = image;

  vm.filter = ['name', 'description', 'rating', 'created_at', 'taken_at', 'user']
}

export default {
  name: 'DetailsCtrl',
  fn: DetailsCtrl
};

// var paragraph = document.createElement("P");
// var text = document.createTextNode(item);
// paragraph.appendChild(text);
// document.body.appendChild(paragraph);
