(function() {
  'use strict';

  angular.module('demoBlog')

  .controller('ArticlesCtrl', function(myConfig, $resource, $location, Article) {
    var vm = this;

    vm.articlesListEmpty = true;

    vm.articles = Article.query(function(response) {
      vm.articlesListEmpty = response.length === 0;
    });

    vm.deleteArticle = function(article) {
      article.$remove({ id: article.id }, function(response) {
        $location.path('/articles');
      });
    };

    return vm;
  });
})();
