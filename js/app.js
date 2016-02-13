(function() {
  'use strict';

  angular.module("demoBlog", ['ngRoute', 'ngResource'])

  .constant('myConfig', {
    API_ROOT_URL: 'http://localhost:3000'
  })

  .config(function($routeProvider) {
    $routeProvider
      .when('/articles', {
        controller: 'ArticlesCtrl',
        controllerAs: 'articlesCtrl',
        templateUrl: 'js/templates/articlesList.html'
      })
      .when('/articles/new', {
        controller: 'ArticleCtrl',
        controllerAs: 'articleCtrl',
        templateUrl: 'js/templates/newArticle.html'
      })
      .when('/article/:id', {
        controller: 'ArticleCtrl',
        controllerAs: 'articleCtrl',
        templateUrl: 'js/templates/articleDetails.html'
      })
      .when('/article/:id/edit', {
        controller: 'ArticleCtrl',
        controllerAs: 'articleCtrl',
        templateUrl: 'js/templates/editArticle.html'
      })
  })

  .run(function($location) {
    $location.path('/articles');
  })

  .factory('Article', function(myConfig, $resource) {
    return $resource(myConfig.API_ROOT_URL + "/articles/:id.json", { id: '@_id' });
  });
})();
