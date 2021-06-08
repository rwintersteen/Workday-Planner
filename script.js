// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// When user opens daily planner, current day should be displayed at the top of the calendar
// When scrolling, timeblocks are presented for standard business hours (M-F, 8AM-5PM)
// On 'click' the timeblock changes color to indicate if timeblock is in the past, current, or future
// On 'click' the timeblock, user can enter an event 
// On 'click' save button, the event entered in the timeblock will save to local storage (local.storage)
// When page is refreshed, saved event remains - fetch(data.stored{page: refresh})