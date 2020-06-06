$(document).ready(function(){
    var currentDay=moment().format('MMMM Do YYYY, h:mm a')
    var currentTime=moment().format("HH");
    
    $('#currentDay').text(currentDay);

    //Set time for each row
    $("#row8").attr("data-time", moment("8:00 am", "h:mm a").format("HH"));
    $("#row9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
    $("#row10").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
    $("#row11").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
    $("#row12").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
    $("#row1").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
    $("#row2").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
    $("#row3").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
    $("#row4").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
    $("#row5").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

    console.log(currentTime)
    // Function to determine current time
    function rightNow(){

    }

    $('saveBtn').on('click', function(){
        // save text to local storage
    })

})