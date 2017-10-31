$(document).ready(function(){
    $("#cuisineType").on("click", function(){
        defaultPage();
    });
    function defaultPage(){
        $(".cuisine-search-field").hide();
        $("#resultsDiv").show();
    }
    defaultPage();
    $("#searchBtns").on("click", function(event){
        if (event.target.id === "restaurantName"){
            $(".rest-search-field").show();
            $(".cuisine-search-field").hide();
        } else {
            $(".cuisine-search-field").show();
            $(".rest-search-field").hide();
        }
    });
    $("#submitBtn").on("click", function() {
        var restaurantName = $("#rest-search-input").val();
        var cuisineName = $("#cuisine-search-input").val();
        var zipName = $("#zip-search-input").val();
        var isValidZip = /(^\d{5}$)/.test(zipName);
        if (!isValidZip) {
            Materialize.toast('Please enter a valid five digit zip!', 4000)
        } else {
            chicagoCall(restaurantName, zipName);
        }
    });

    function chicagoCall(restaurantName, zipName){
        var baseURL = 'https://data.cityofchicago.org/resource/cwig-ma7x.json';
        var queryURL = "?$where=inspection_date between '2012-01-10T12:00:00' and '2017-01-14T14:00:00' and starts_with(dba_name, upper('" + restaurantName + "')) and zip='" + zipName + "'";
        var fullURL = baseURL + queryURL;
        $.getJSON(fullURL, function(r){
            var pass = 0;
            var fail = 0;
            for (var i = 0; i < r.length; i++) {
                var result = r[i].results;
                switch (result) {
                    case "Pass":
                        pass++;
                        var passTableRow = $("<tr>");
                        var tableData1 = $("<td>");
                        var tableData2 = $("<td>");
                        var tableData3 = $("<td>");
                        var tableData4 = $('<td>');
                        tableData1.text(r[i].inspection_date);
                        tableData2.text(r[i].results);
                        tableData3.text(r[i].inspection_type);
                        tableData4.text(r[i].violations);
                        var passTableBody = $("#passTableBody");
                        passTableRow.append(tableData1, tableData2, tableData3, tableData4);
                        passTableBody.append(passTableRow);
                        break;
                    case "Fail":
                        fail++;
                        var failTableRow = $("<tr>");
                        var failTableBody = $("#failTableBody");
                        var tableData1 = $("<td>");
                        var tableData2 = $("<td>");
                        var tableData3 = $("<td>");
                        var tableData4 = $('<td>');
                        tableData1.text(r[i].inspection_date);
                        tableData2.text(r[i].results);
                        tableData3.text(r[i].inspection_type);
                        tableData4.text(r[i].violations);
                        failTableRow.append(tableData1, tableData2, tableData3, tableData4);
                        failTableBody.append(failTableRow);
                        break;
                    default:
                        console.log("There has been an error with this restaurant");
                        break;
                };
            };
            console.log(pass);
            $("#totalPass").text(pass);
            $("#totalFail").text(fail);
        });
    };
});
