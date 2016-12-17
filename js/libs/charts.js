var chaRt = (function (){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.load('current', {'packages':['bar']});
  

  let show = function (resCountry) {

    google.charts.setOnLoadCallback(callback);

    function callback(){
      var data1 = google.visualization.arrayToDataTable(resCountry);
      var options1 = {
        title: 'My Daily Activities'
      };
      var chart1 = new google.visualization.PieChart(document.getElementById('piechart'));

      chart1.draw(data1, options1);

    }
  }


  let drawAll = function (allPartners) {
    console.log (allPartners)
    var temp = JSON.parse(JSON.stringify(allPartners));
    temp.unshift(["Partners", "Value", { role: "style" } ]);
    // console.log (temp)

     var data = google.visualization.arrayToDataTable(temp);
     var view = new google.visualization.DataView(data);

     view.setColumns([0, 1,
      { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
      2]);

     var options = {
      title: "CompanyPartners",
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    return chart.draw(view, options);

  };

  return {
    drawAll:drawAll,
    show: show
  };

}())