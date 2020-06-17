var task = {
    state: "",
    date: "",
    desc: ""
};

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

        var descDiv = $("<div>").addClass("col-10 border description");
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

        if(localStorage.getItem(times[i]) === null) {
            var desc = $("<p>").text("No Tasks");
        }
        else {
            var desc = $("<p>").text(localStorage.getItem(times[i]));
        }
        var tab = $("<div>").addClass("col-1 rounded-left time-block");
        descDiv.append(desc);
        row.append(hour, descDiv, tab);
        $('.container').append(row);
    }
}

var edit = function () {
    // get current text
    var desc = $(this)
    .text()
    .trim();
    

    // create new input element
    var newDesc = $("<input>")
    .attr("type", "text")
    .addClass("form-control")
    .val(desc);

    // swap out elements
    $(this).replaceWith(newDesc);

    // automatically focus on new element
    newDesc.trigger("focus");
}

var save = function () {
    console.log(this);
    var desc = $(this)
        .val()
        .trim();
    var index = $(".col").index(this);
    console.log(index);
    var time = $(".hour")[index].textContent;
    console.log(time);
    localStorage.setItem(time, desc);

    // create new p element
    var newDesc = $("<p>")
        .text(desc);

    // swap out elements
    $(this).replaceWith(newDesc);
}

createElements();
$(".description").on("blur", "input[type='text']", save);
// jquery onclick
$('.description').on('click', 'p', edit);