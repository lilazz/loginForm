(function () {
 var url = 'http://codeit.pro/frontTestTask/company/getList';
 var loader = document.getElementsByClassName ('loader')[2];
 var infoBlock = document.getElementsByClassName ('companies-by-location')[0];

 myRequest(url)
 .then(ready,error);

 function error(error){
  document.write(error);
}
function ready(res) {
  loader.style.display = "none";
  infoBlock.style.display = "block";
  var temp = JSON.parse(res);
  var country = {};
  var resCountry = [];
  var companies = temp.list;

  for (var i = 0; i < companies.length; i++) {
    var current = companies[i].location.name;
    if (!country[current]) {
      country[current] = 1;
    } else {
      country[current]++;
    }
  }
  resCountry.push (['Country', 'Number'])
  for (var key in country) {
    var tempArr = [key, country[key]];
    resCountry.push(tempArr);
  }
  chaRt.show(resCountry);
}
})();
