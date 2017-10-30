$(document).ready(function(){
    $("#cuisineType").on("click", function(){
        defaultPage();
    });

    function defaultPage(){
        $(".cuisine-search-field").hide();
        $("#resultsDiv").hide();
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
            console.log("Valid zip must be five digits long, stupid!");

        }
        else{
            console.log(zipName);
        }
        
    });
});
