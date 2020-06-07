$(document).ready(function(){
    
    //Current Time and Day 
    var currentDay=moment().format('MMMM Do YYYY, h:mm a');
    $('#currentDay').text(currentDay);


    var currentTime = moment().hours();
    var time = $(".time");
    
    //create a loop 
    $(time).each(function (index, element) {
    
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
    
    
    // Make color change through for loop
    $('saveBtn').on('click', function(){
        // save text to local storage
    })

})