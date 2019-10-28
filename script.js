$(document).ready(function(){

    var m = moment();
    var currentDate = m.format("MMMM Do YYYY");
    var currentHour = moment().format("HH"); //moment.format("HH")

    $("#currentDay").text("Today's Date: " + currentDate);

    
    $(".saveBtn").on("click",function(){
        console.log("button");
        var eventInput = $("#description").val();
        localStorage.setItem($((this).attr("data-value")), eventInput);
    });

    //creating a loop to fulfill condition
    function timeStyle(){
        console.log($(".row"),currentHour);
        var rows = $(".row");
        for(var i = 0; i < rows.length; i++){
        if($(".row").attr("data-value") > currentHour) {
            $(".row").attr("class", "row future");
        }
        else if($(".row").attr("data-value") === currentHour) {
            $(".row").attr("class", "row present");
        }else{
            //$(".row").attr("data-value") < currentHour); {
            $(".row").attr("class", "row past");
        }
    }
    };
    timeStyle();
})