// var task {
    // state: past, present, future,
    // date: date,
    // desc: description
    // }

// get element to change the day at the time
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var date = new Date();
var today = document.getElementById('currentDay');
today.textContent = `${day[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}`;
var currentHour = date.getHours();

// set states
// var states = get all rows
// *can use moment() instead
// for(states.length) {
//     var stateHour = states[i].hour.textContent;
//     if(stateHour == currentHour){
//         states[i].description.className = "present";
//     }
//     else if(stateHour < currentHour) {
//         states[i].description.className = "past";
//     }
//     else {
//         states[i].description.className = "future";
//     }
// }

// var edit = function
    // edit tasks
// var create = function
    // create task
// var update = function
    // update task

// jquery onclick
// var open
    // open modal
    // if (task) edit
    // if (!task) create
// var save =  function
    // save task
    // close modal (close())
// var close = function 
    // close edit when !target click
// var delete = function
    // delete task