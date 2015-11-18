let HomeService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/message';

  this.getAllMessages = getAllMessages;
  this.submitForm = submitForm;

  function Message (msgObj) {
    this.name = msgObj.name;
    this.email = msgObj.email;
    this.address = msgObj.address;
    this.message = msgObj.message;
  }

  function getAllMessages () {    
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
    });
  }

  function submitForm (msgObj) {
    let m = new Message(msgObj);
    return $http.post(url, m, PARSE.CONFIG);
  }


};

HomeService.$inject = ['$http', 'PARSE'];

export default HomeService;