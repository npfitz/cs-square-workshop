function ExampleCtrl(api500px) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  var req = api500px.photos.getPopular({'sort': 'created_at', 'rpp': '100'}, function(result){
    console.log(result);
  });



}

ExampleCtrl.$inject = ['api500px']

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
