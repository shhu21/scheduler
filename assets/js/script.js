var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// get element to change the day at the time
$("#currentDay").text(`${moment().format(`dddd MMMM Do`)}`);
var currentHour;
function setHour () {
    var getHour = moment().format('LT');
    var hourArr = [];
    hourArr.push(getHour.split(":", 1));
    hourArr.push(getHour.substr(getHour.indexOf(" ") + 1));
    currentHour = `${hourArr[0]}${hourArr[1]}`;
}

function createElements () {
    setHour();
    var ifPresent = false;
    // create grid
    for(var i = 0; i < times.length; i++){
        var row = $("<div>").addClass("row");
        var hour = $("<div>")
            .addClass("col-1 hour")
            .text(`${times[i]}`);

        var descDiv = $("<textarea>").addClass("col-10 border description");
        if(times[i] === currentHour) {
            descDiv.addClass("present");
            ifPresent = true;
        }
        else if(ifPresent === false) {
            descDiv.addClass("past");
        }
        else {
            descDiv.addClass("future");
        }

        if(localStorage.getItem(times[i])) {
            descDiv.val(`${localStorage.getItem(times[i])}`);
        }

        var tab = $("<button>").addClass("col-1 rounded-left time-block saveBtn");
        var saveEl = $("<i>").text("SAVE");
        tab.append(saveEl);
        row.append(hour, descDiv, tab);
        $('.container').append(row);
    }
}

var edit = function () {
    $(this.nextElementSibling).addClass("save");
    $('.save').on('click', save);
}

var save = function () {
    $('.description').off('click', edit);
    console.log("save");
    var desc = this.previousElementSibling;
    this.removeAttribute('id');

    desc.removeAttribute("id");
    var newDesc = desc.value;
    console.log(newDesc);
    var time = desc.previousElementSibling.textContent;
    console.log(time);

    localStorage.setItem(time, newDesc);

    $('.description').on('click', edit);
    $(this).off('click', save);
}

createElements();
$('.description').on('click', edit);