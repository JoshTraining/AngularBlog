(function() {
  'use strict';

  angular.module('demoBlog')

  .controller('ArticleCtrl', function(myConfig, $resource, $routeParams, $location, Article) {
    var vm = this;

    if($routeParams.id) {
      vm.article = Article.get({ id: $routeParams.id });

      vm.updateArticle = function() {
        vm.article.$update({ id: vm.article.id }, function(response) {
          $location.path('/articles');
        });
      };
    }
    else {
      vm.article = new Article();

      vm.addArticle = function() {
        vm.article.$save(function(response) {
          $location.path('/articles');
        });
      };
    }

    return vm;
  });
})();
