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
        console.log(restaurantName);
        var cuisineName = $("#cuisine-search-input").val();
        console.log(cuisineName);
        var zipName = $("#zip-search-input").val();
        var isValidZip = /(^\d{5}$)/.test(zipName);
        console.log(zipName);
        if (!isValidZip) {
            Materialize.toast('Please enter a valid five digit zip!', 4000)
        } else {
            console.log(zipName + " has a valid length");
        }
    });
});
