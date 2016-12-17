(function(){
  var data;
	var block = document.getElementById ('Company-Partners-Block');
  var sortType = getSortKey();
  var spanContainer = document.querySelector('.sort');

  
  document.addEventListener ('clickOnCompaniesButton', showBlock);
  spanContainer.addEventListener('click',sortClick);

  function sortClick (evt) {
    if (evt.target.nodeName === "SPAN") {
      var type = evt.target.innerHTML;
      var temp = JSON.parse(localStorage.getItem('sortBy'));
      if (type === "partners") {  
        if (temp.byField === 1) {
          temp.byField = 0;
          localStorage.setItem("sortBy", JSON.stringify(temp));
        } else {
          if (temp.increment === true) {
            temp.increment = false;
            localStorage.setItem("sortBy", JSON.stringify(temp));
          } else {
            temp.increment = true;
            localStorage.setItem("sortBy", JSON.stringify(temp));
          }
        }
      } else if (type === "Value") {
        if (temp.byField === 0) {
          temp.byField = 1;
          localStorage.setItem("sortBy", JSON.stringify(temp));
        } else {
          if (temp.increment === true) {
            temp.increment = false;
            localStorage.setItem("sortBy", JSON.stringify(temp));
          } else {
            temp.increment = true;
            localStorage.setItem("sortBy", JSON.stringify(temp));
          }
        }
      }
    }

       var getSort = getSortKey();
      console.log(getSort);
       console.log(data);   
       var sortedData = data.sort(sortChoose(getSort));    
       console.log (sortedData)
       chaRt.drawAll(sortedData);


  }


 function showBlock (evt) {

  block.style.display = "block";

    // makeArrayFromEvent(evt);
    var allPartners = [],
      part = [],
      info = '',
      listOfPartners = evt.detail.partnersInfo;

    for (var i=0; i<=listOfPartners.length-1; i++) {

      part[0] = listOfPartners[i].name;
      part[1] = listOfPartners[i].value;
      part[3] = "#e5e4e2";
      allPartners[i] = [part[0], part[1], part[3]];

    }
     allPartners.sort(sortChoose(sortType));
     console.log(allPartners);
    chaRt.drawAll(allPartners);

  data = allPartners;
}


function sortChoose (sortType) {
  if (sortType.increment === true) {
    return increase
  } else {
    return decrease;
  }
      
};


function decrease(i, ii) { // по убыванию
  if (i[sortType.byField] > ii[sortType.byField])
    return -1;
  else if (i[sortType.byField] < ii[sortType.byField])
    return 1;
  else
    return 0;
}

function increase(i, ii) { // по возрастанию

  if (i[sortType.byField] > ii[sortType.byField])
    return 1;
  else if (i[sortType.byField] < ii[sortType.byField])
    return -1;
  else
    return 0;
}

function getSortKey(){
  var sortType = localStorage.getItem("sortBy");
  if (!sortType) {
    sortType = JSON.stringify( {
      "byField": 1,
      "increment": true
      });
    localStorage.setItem("sortBy", sortType);
  }
  console.log(JSON.parse (sortType));
  return JSON.parse (sortType);
}


})()