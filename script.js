
$(document).ready(function () {

  var todayDate = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(todayDate);


  hours = JSON.parse(localStorage.getItem('hours'));
  if (hours == undefined) {
    var hours = [{
      timetxt: "9am",
      timeHH: "09",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "10am",
      timeHH: "10",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "11am",
      timeHH: "11",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "12pm",
      timeHH: "12",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "1pm",
      timeHH: "13",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "2pm",
      timeHH: "14",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "3pm",
      timeHH: "15",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "4pm",
      timeHH: "16",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    },

    {
      timetxt: "5pm",
      timeHH: "17",
      dayEvent: "",
      datetime: moment().format("YYYYMMDD")
    }
    ];

  };

  NewDay(hours);
  
  hours.forEach(function (currHour) {

    var hourBlock = $("<div>").attr("class", "row time-block");
    $(".container").append(hourBlock);

    var hourCol = $("<div>").text(currHour.timetxt).attr("class", "col-md-1 hour");

    if (moment().format("HH") > currHour.timeHH) {
      var textCol = $("<textarea>").attr("class", "col-md-10 description past");
    };
    if (moment().format("HH") == currHour.timeHH) {
      var textCol = $("<textarea>").attr("class", "col-md-10 description present");
    };
    if (moment().format("HH") < currHour.timeHH) {
      var textCol = $("<textarea>").attr("class", "col-md-10 description future");
    };

    $(textCol).attr("id", "dEvent" + currHour.timeHH);
    $(textCol).val(currHour.dayEvent);

    var btnSave = $("<button>").attr("class", "col saveBtn fa fa-save");
    $(btnSave).click(function () {
      currHour.dayEvent = $("#dEvent" + currHour.timeHH).val();
      localStorage.setItem('hours', JSON.stringify(hours));
    });

    $(hourBlock).append(hourCol, textCol, btnSave);

  });

});


function NewDay(hours) {
  if (hours[0].datetime < moment().format("YYYYMMDD")) {

    hours.forEach(function (currHour) {
      currHour.dayEvent = "";
      currHour.datetime = moment().format("YYYYMMDD");
    });

  };
}

