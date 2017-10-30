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
        // console.log(event.target.id);
        if (event.target.id === "restaurantName"){

            $(".rest-search-field").show();
            $(".cuisine-search-field").hide();

        } else {
            $(".cuisine-search-field").show();
            $(".rest-search-field").hide();
        }

    });

    $("#submitBtn").on("click", function() {
        // body...'
        // console.log("I clicked on the submit button");
        var restaurantName = $("#rest-search-input").val();
        console.log(restaurantName);
        var cuisineName = $("#cuisine-search-input").val();
        console.log(cuisineName);
        var zipName = $("#zip-search-input").val();
        // Suggest removal of |(^\d{5}-\d{4}$) as we don't want a zip+4, only a zip. - RS
        var isValidZip = /(^\d{5}$)/.test(zipName);
        console.log(isValidZip);


        if (!isValidZip) {
            // console.log("Valid zip must be five digits long, stupid!");
            //call the toast function for an unobtrusive message
            Materialize.toast('Please enter a valid five digit zip!', 4000)

        else{
            console.log(zipName);
            chicagoCall(restaurantName, zipName);
        }
    });

    function chicagoCall(restaurantName, zipName){
        var baseURL = 'https://data.cityofchicago.org/resource/cwig-ma7x.json';
        var queryURL = "?$where=inspection_date between '2012-01-10T12:00:00' and '2017-01-14T14:00:00' and starts_with(dba_name, upper('" + restaurantName + "')) and zip='" + zipName + "'";
        var fullURL = baseURL + queryURL;
        $.getJSON(fullURL, function(r){
            console.log(r);
            var pass = 0;
            var fail = 0;
            for (var i = 0; i < r.length; i++) {
                var result = r[i].results;
                switch (result) {
                    case "Pass":
                        pass++
                        var passTableRow = $("<tr>");
                        var passTableBody = $("#passTableBody");
                        var tableData1 = $("<td>");
                        var tableData2 = $("<td>");
                        var tableData3 = $("<td>");
                        var tableData4 = $('<td>');
                        tableData1.text(r[i].inspection_date);
                        tableData2.text(r[i].results);
                        tableData3.text(r[i].inspection_type);
                        tableData4.text(r[i].violations);
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
                        tableData4.text(r[i].violations.toLowerCase());
                        failTableRow.append(tableData1, tableData2, tableData3, tableData4);
                        failTableBody.append(failTableRow);
                        break;
                    default:
                        console.log("There has been an error with this restaurant");
                        break;
                };
                
            };
        });
    };
});
