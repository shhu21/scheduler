// hour times
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// set the day on the page
$("#currentDay").text(`${moment().format(`dddd, MMMM Do`)}`);
// current hour
var currentHour = "";

// set the current hour
function setHour () {
    // format: 0:00 XM
    var getHour = moment().format('LT');
    // get the hour
    currentHour += getHour.split(":", 1);
    // get the AM/PM
    currentHour += getHour.substr(getHour.indexOf(" ") + 1);
}

// create the grid
function createElements () {
    setHour();
    var ifPresent = false;
    for(var i = 0; i < times.length; i++){
        // row
        var row = $("<div>").addClass("row");
        // hour
        var hour = $("<div>")
            .addClass("col-1 hour")
            .text(`${times[i]}`);
        // description
        var desc = $("<textarea>").addClass("col-10 border description");

        // if the time matches the current hour mark as 'present'
        if(times[i] === currentHour) {
            desc.addClass("present");
            // past the present -> future
            ifPresent = true;
        }
        // have not past the current hour, mark as 'past'
        else if(ifPresent === false) {
            desc.addClass("past");
        }
        // past the current hour, mark as 'future'
        else {
            desc.addClass("future");
        }
        // if there's a saved text at that hour, load the text into the description
        if(localStorage.getItem(times[i])) {
            desc.val(`${localStorage.getItem(times[i])}`);
        }

        // save button
        var tab = $("<button>").addClass("col-1 rounded-left time-block saveBtn");
        // <i> for the save button
        var saveEl = $("<i>").addClass("fas fa-save");

        // append the HTML
        tab.append(saveEl);
        row.append(hour, desc, tab);
        $('.container').append(row);
    }
}

// save the new inputted text
var save = function () {
    // get the new inputted text
    var newDesc = this.previousElementSibling.value;
    // get the corresponding hour
    var time = this.previousElementSibling.previousElementSibling.textContent;
    // save to local storage (hour, text)
    localStorage.setItem(time, newDesc);
}

createElements();
$('.saveBtn').on('click', save);