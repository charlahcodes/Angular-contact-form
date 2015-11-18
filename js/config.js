let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      template: '<div class="container" ui-view></div>'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.comments', {
      url: '/comments',
      controller: 'CommentsController as vm',
      templateUrl: 'templates/comments.tpl.html'
    })
    ;


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;