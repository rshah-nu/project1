    $("#cuisineType").on("click", function(){
        var divOne = $('<div class="input-field col s6">');
        var restaurantIcon = $('<i class="material-icons prefix">restaurant</i>')
        var cuisineInput = $('<input id="cuisineType" type="text">');
        var cuisineLabel = $('<label for="cuisineType">');
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
    });

    $("#restaurantName").on("click", function(){
        console.log("restaurantName")
        var divOne = $('<div class="input-field col s6">');
        var restaurantIcon = $('<i class="material-icons prefix">restaurant_menu</i>')
        var restaurantInput = $('<input id="restaurantName" type="text">');
        var restaurantLabel = $('<label for="restaurantName">');
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

    $("#zipCode").on("click", function(){
        console.log("zipCode")
        var divTwo = $('<div class="input-field col s4 offset-s4">');
        var zipIcon = $('<i class="material-icons prefix">place</i>');
        var zipInput = $('<input id="zipInput" type="text">');
        var zipLabel = $('<label for="zipInput">');
        zipLabel.text("Zip Code");
        divTwo.append(zipIcon);
        divTwo.append(zipInput);
        divTwo.append(zipLabel);
        $("#searchFields").html(divTwo);
    });