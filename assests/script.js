$(document).ready(function(){
    
    //Current Time and Day 
    var currentDay=moment().format('MMMM Do YYYY, h:mm a');
    $('#currentDay').text(currentDay);


    var currentTime = moment().hours();
    var timeBlock = $(".time-block");
    
    //create a loop 
    $(timeBlock).each(function (index, element) {
    
    //variable that finds current time in each time slot
    var timeRow = parseInt($(element).attr("data-time"));

    // if/else statements to reference color from CSS for time
    if (timeRow < currentTime) {
        $(element).addClass("past");
    }
    
    else if (timeRow == currentTime) {
        $(element).addClass("present");
    }
    
    else {
        $(element).addClass("future");
    }
    });
    
    //Create variable calling on HTML
    var description = $(".description");

    // Function to pull data and text from local storage
    $(description).each(function(i, element) {
        var timeID = $(element).attr("data-time");
        var description = localStorage.getItem(timeID);
        $(element).text(description);


    // save text to local storage
    $('.saveBtn').on('click', function(){
        var timeID = $(this).siblings(".description").attr("data-time");
        var userInput = $(this).siblings(".description").val();
        localStorage.setItem(timeID, userInput);
    });


    });
})