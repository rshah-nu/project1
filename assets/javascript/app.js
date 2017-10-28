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
            $.getJSON(fullURL, function(result){
                console.log(result);
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