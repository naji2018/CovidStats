$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",
  success: function (res) {
    console.log(res.Countries);
    for (let i = 0; i < res.Countries.length; i++) {
      var totalactive =
        res.Countries[i].TotalConfirmed - res.Countries[i].TotalRecovered;
      var tablerow = `<tr><td>${res.Countries[i].Country}</td><td>${res.Countries[i].TotalConfirmed}</td><td>${totalactive}</td><td>${res.Countries[i].TotalRecovered}</td><td>${res.Countries[i].TotalDeaths}</td></tr>`;
      $("#tbody").append(tablerow);
    }
    $("covidtable").dataTable();
  },
  error: function (error) {
    console.log(error);
  },
});
