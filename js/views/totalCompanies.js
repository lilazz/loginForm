(function () {
   var url = 'http://codeit.pro/frontTestTask/company/getList';
   var loader = document.getElementsByClassName ('loader')[0];
   var infoBlock = document.getElementsByClassName ('total-companies')[0];

   myRequest(url)
      .then(ready,error);

   function error(error){
      document.write(error);
   }
   function ready(res) {
      loader.style.display = "none";
      infoBlock.style.display = "block";
      var temp = JSON.parse(res);
      var totalCompanies = temp.list.length + 1;
      var numOfCompanies = document.getElementsByClassName('circle')[0];
      numOfCompanies.innerHTML = totalCompanies;
   }

   // var temp = JSON.parse(arr.responce);
})();