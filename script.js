// variables:

let today = moment();
let timeBlockEl = document.querySelector('.container');

// show current time/date/day:
$('#currentDay').text(today.format('LLLL'));

// event listener/get nearby values in JQuery and save to local storage:
$('.saveBtn').on('click', function () {
let textValue = $(this).siblings('.description').val();
let timeKey = $(this).parent().attr('id');
localStorage.setItem(timeKey, textValue);
});

// getting items from local storage:
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


// keeping track of tasks and changing their colour depending on if past, present or future:
function auditTask() {
    let currentHour = today.hours();

    // loop over every time block
    $('.time-block').each(function () {
        let timeId = parseInt($(this).attr('id').split("hour")[1]);

    // add past class if time id attribute is before current hour
    if (timeId < currentHour) {
    $(this).addClass('past');
}
else if (timeId === currentHour) {
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass('present');
}
// remove the past and present classes and add the future class if the time Id attribute is greater than the current time
else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});
}

// call auditTask function:
auditTask();

// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function () {
    location = ''; // location references the current URL
}, 1000 * 60);