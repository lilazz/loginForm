/**
 * Created by Andr on 06.11.2016.
 */
 (function () {

   var loginForm = document.forms.loginForm;

   var button = document.getElementById('testButton');
   button.onclick = function () {
      sendData()
   };
   function createForm() {
      var form = new FormData(loginForm);
      return form;
   }

   function sendData() {
      var xhr = new XMLHttpRequest();
      var url = 'http://codeit.pro/frontTestTask/user/registration';
      var data = createForm();
      xhr.open("POST", url, true);
      xhr.send(data);
      xhr.onreadystatechange = function () {
         // if (!checkAccess(xhr)) {
         //    state go to url;
         //    form.preventDefault();
         //
         // }
         console.log(xhr);
      }
   }
   var submitForm = function(evt){
      var email = loginForm.elements.email;

      if ( !verifyEmail(email.value) ) {
         evt.preventDefault();
         alert('NotSubmit');
         return 
      }
      //alert("GO");
      sendData();

   }

   loginForm.addEventListener("submit", submitForm);


   function verifyEmail(str){
      var arr=str.split("@");
      var domaim = arr[1].split(".");
      var lastSym = str[str.length-1];

      if (arr.length == 2 && domain.length > 2 && lastSym !== ".") {
         return true;
      }
      return false;
   }

   //проверка:функция читает Responce responseStatus и выводит ошибку из errorMessage
   // function checkAccess(xhr) {
   //    if (xhr.responce.status == 'form error') {
   //       create dom elemet
   //
   //       return false;
   //    }
   //    if (xhr.responce.statuse === 'userCreated') {
   //       return true
   //    }
   // }
   // var user = {
   //    name: loginForm.elements.name.value,
   //    secondname: loginForm.elements.secondname.value,
   //    email: loginForm.elements.email.value,
   //    gender: loginForm.elements.gender.genre.sele1cted,
   //    pass: loginForm.elements.pass.value
   // }
})();