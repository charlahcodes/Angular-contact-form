let CommentsController = function ($scope, HomeService) {

  HomeService.getAllMessages().then ( (res) => {
    $scope.messages = res.data.results;
    console.log(res);
  });

};

CommentsController.$inject = ['$scope', 'HomeService'];

export default CommentsController;