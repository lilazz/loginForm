(function () {
   var url = 'http://codeit.pro/frontTestTask/company/getList';
   var loader = document.getElementsByClassName ('loader')[1];
   var infoBlock = document.getElementsByClassName ('list-of-companies')[0];

   myRequest(url)
      .then(ready, error);

   function error(error) {
      document.write(error);
   }

   function ready(res) {
      loader.style.display = "none";
      infoBlock.style.display = "block";

      var responceFromServer = JSON.parse(res);
      FullListOfCompanies(responceFromServer);
   }

   function FullListOfCompanies(responceFromServer) {
      
      var companies = responceFromServer.list;
      var parrent = document.getElementById('class-list');
      var buttonContainer = createElement('div', null, ["btn-group-vertical", 'buttons-collection'], {
         'role': 'group',
         'area-label': '...'
      });

      parrent.appendChild(buttonContainer);

      buttonContainer.addEventListener('click', createEvent);

      for (var i = 0; i < companies.length; i++) {
         
         var company = companies[i];
         buttonContainer.appendChild(createElement('button', company.name, ['btn-default', 'btn'], {
            'type': "submit"
         }));


   }

   function createEvent (evt) {
      if (evt.target.nodeName === "BUTTON") {
         var company = evt.target.innerHTML;
               var companies = responceFromServer.list;
               for (var i = 0; i < companies.length; i++) {

                  if (companies[i].name === company) {
                     var partnersInfo = companies[i].partners;
                     }
                  
               }
      
            

        // var event = new Event('clickOnCompaniesButton', {bubbles: true, cancelable: true});
        var event = new CustomEvent ('clickOnCompaniesButton', {
            detail: {
               "partnersInfo": partnersInfo
               
               },
            bubbles: true,
            cancelable: false
     });

         document.dispatchEvent(event);
      }


   }
}
   // var responceFromServer = JSON.parse(arr.responce);
})();