let HomeController = function($scope, PARSE, HomeService) {
  
  // Name field validation
  let validateName = (name) => {
    if (!name) {
      $scope.nameMsg = 'Name cannot be left empty.';
    }
  };

  $scope.$watch('message.name', function (newVal, prevVal) {
    if(!newVal) return;
    validateName(newVal);
  });

  // Email validation
  let validateEmail = (email) => {
    if (email.indexOf("@") === -1) {
      $scope.emailMsg = 'Email must contain an "@".';
    } else {$scope.emailMsg = '';}
  };

  $scope.$watch('message.email', function (newVal, prevVal) {
    if(!newVal) return;
    validateEmail(newVal);
  });

  // Web address validation
  var pattern = /^https?:\/\//i;

  let validateAddress = (address) => {
    if (!pattern.test(address)) {
      $scope.addressMsg = 'Website must start with http://';
    } else {$scope.addressMsg = '';}
  };

  $scope.$watch('message.address', function (newVal, prevVal) {
    if(!newVal) return;
    validateAddress(newVal);
  });

  // Message cannot be empty

  let validateMessage = (message) => {
    if (message.length === 0) {
      $scope.messageMsg = 'Message cannot be left empty.';
    } else {$scope.messageMsg = '';}
  };

  $scope.$watch('message.message', function (newVal, prevVal) {
    if(!newVal) return;
    validateMessage(newVal);
  });

  console.log(PARSE);

  let vm = this;

  vm.submitForm = submitForm;

  function submitForm (msgObj) {
    HomeService.submitForm(msgObj).then( (res) => {
      console.log(res);
    });
  }


};

HomeController.$inject = ['$scope', 'PARSE', 'HomeService'];

export default HomeController;