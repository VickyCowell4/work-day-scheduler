// variables:

let today = moment();
let timeBlockEl = document.querySelector('.container');

// show current time/date/day:
$('#currentDay').text(today.format('LLLL'));

// event listener:
$('.saveBtn').on('click', function () {
let textValue = $(this).siblings('.description').val();
let timeKey = $(this).parent().attr('id');
localStorage.setItem(timeKey, textValue);
});

