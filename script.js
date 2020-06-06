$(document).ready(function(){
    var currentDay=moment().format('MMMM Do YYYY, h:mm a')
    var currentTime=moment().format("HH");
    
    $('#currentDay').text(currentDay);

    // Function to determine current time
    function rightNow(){

    }

    $('saveBtn').on('click', function(){
        // save text to local storage
    })

})