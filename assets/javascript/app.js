$(document).ready(function(){
    $("#cuisineType").on("click", function(){
        defaultPage();
    });

    $("#restaurantName").on("click", function(){
        console.log("restaurantName")
        var divOne = $('<div class="input-field col s6">');
        var restaurantIcon = $('<i class="material-icons prefix">restaurant_menu</i>')
        var restaurantInput = $('<input id="restaurantInput" type="text">');
        var restaurantLabel = $('<label for="restaurantInput">');
        restaurantLabel.text("Restaurant");
        var divTwo = $('<div class="input-field col s6">');
        var zipIcon = $('<i class="material-icons prefix">place</i>');
        var zipInput = $('<input id="zipInput" type="text">');
        var zipLabel = $('<label for="zipInput">');
        zipLabel.text("Zip Code");
        divOne.append(restaurantIcon);
        divOne.append(restaurantInput);
        divOne.append(restaurantLabel);
        divTwo.append(zipIcon);
        divTwo.append(zipInput);
        divTwo.append(zipLabel);
        $("#searchFields").html(divOne);
        $("#searchFields").append(divTwo);
    });

    function defaultPage() {
        var divOne = $('<div class="input-field col s6">');
        var restaurantIcon = $('<i class="material-icons prefix">restaurant</i>')
        var cuisineInput = $('<input id="cuisineInput" type="text">');
        var cuisineLabel = $('<label for="cuisineInput">');
        cuisineLabel.text("Cuisine");
        var divTwo = $('<div class="input-field col s6">');
        var zipIcon = $('<i class="material-icons prefix">place</i>');
        var zipInput = $('<input id="zipInput" type="text">');
        var zipLabel = $('<label for="zipInput">');
        zipLabel.text("Zip Code");
        divOne.append(restaurantIcon);
        divOne.append(cuisineInput);
        divOne.append(cuisineLabel);
        divTwo.append(zipIcon);
        divTwo.append(zipInput);
        divTwo.append(zipLabel);
        $("#searchFields").html(divOne);
        $("#searchFields").append(divTwo);
        $("#resultsDiv").hide();
    };
    defaultPage();

        $("#submitBtn").on("click", function(){
            console.log("I'm Clicked!");
            var restaurantValue = $("#restaurantInput").val();
            var cuisineInput = $("#cuisineInput").val();
            var zipInput = $("#zipInput").val();
            if (restaurantValue == undefined) {
                console.log("Normally would go to Fxn");
                chicagoCall(cuisineInput, zipInput)
            }
            else {
                chicagoCall(cuisineInput, zipInput)
            }
        });

        function chicagoCall(cuisineInput, zipInput){
            var baseURL = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?';
            var queryParam = "$where=inspection_date between '2012-01-10T12:00:00' and '2017-01-14T14:00:00' and starts_with(dba_name, upper('" + cuisineInput + "')) and zip='" + zipInput + "'"
            var fullURL = baseURL + queryParam
            $.getJSON(fullURL, function(results){
                console.log(results);
                console.log(results[0].address);
                var highRisk = 0;
                var mediumRisk = 0;
                var lowRisk = 0;
                for (var index = 0; index < results.length; index++) {
                    var riskType = results[index].risk;
                    switch (riskType) {
                        case "Risk 1 (High)":
                            highRisk++
                            break;
                        case "Risk 2 (Medium)":
                            mediumRisk++
                            break;
                        case "Risk 3 (Low)":
                            lowRisk++
                            break;
                        default:
                            break;
                    };
                    var tableRow = $("<tr>");
                    var tableData1 = $("<td>");
                    var tableData2 = $("<td>");
                    var tableData3 = $("<td>");
                    var tableData4 = $('<td>');
                    tableData1.text(results[index].risk);
                    tableData2.text(results[index].address);
                    tableData3.text(results[index].results);
                    tableData4.text(results[index].violations);
                    tableRow.append(tableData1);
                    tableRow.append(tableData2);
                    tableRow.append(tableData3);
                    tableRow.append(tableData4);
                    $("#sampleTable").append(tableRow);
                };
                $("#highRisks").text(highRisk);
                $("#mediumRisks").text(mediumRisk);
                $("#lowRisks").text(lowRisk);
                $("#resultsDiv").show();
            });
        };

});

//  $where=inspection_date between '2015-01-10T12:00:00' and '2017-01-14T14:00:00' and starts_with(dba_name, upper('jimmy johns')) and zip='60660'
    // $("#zipCode").on("click", function(){
    //     console.log("zipCode")
    //     var divTwo = $('<div class="input-field col s4 offset-s4">');
    //     var zipIcon = $('<i class="material-icons prefix">place</i>');
    //     var zipInput = $('<input id="zipInput" type="text">');
    //     var zipLabel = $('<label for="zipInput">');
    //     zipLabel.text("Zip Code");
    //     divTwo.append(zipIcon);
    //     divTwo.append(zipInput);
    //     divTwo.append(zipLabel);
    //     $("#searchFields").html(divTwo);
    // });

    // for (var i = 0; i < temp1.length; i++){
    //     var cse = temp1[i].results;
    //     switch (cse) {
    //         case "Fail":
    //             console.log("SUPER fail :( ");
    //                }
    // }