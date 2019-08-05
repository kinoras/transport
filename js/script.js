var app = new Vue({
  el: "#app",
  data: {
    // activeBigPage: "0",
    page: 0,
    buses: {
      "16": {
        "Kazan Expo": ["07:00", "07:30", "08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"],
        "WorldSkills Village": ["12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:30"] },

      "17": {
        "Kazan Expo": ["07:00", "07:30", "08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"],
        "WorldSkills Village": ["12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:30"] },

      "18": {
        "Kazan Expo": ["07:00", "07:30", "08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"],
        "WorldSkills Village": ["12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:30"] },

      "19": {
        "Kazan Expo": ["07:00", "07:30", "08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"],
        "WorldSkills Village": ["12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:30"] },

      "20": {
        "Kazan Expo": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
        "WorldSkills Village": ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"] },

      "21": {
        "Kazan Expo": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
        "WorldSkills Village": ["00:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"] },

      "22": {
        "Kazan Expo": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
        "WorldSkills Village": ["00:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"] },

      "23": {
        "Kazan Expo": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
        "WorldSkills Village": ["00:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"] },

      "24": {
        "Kazan Expo": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
        "WorldSkills Village": ["00:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"] },

      "25": {
        "Kazan Expo": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
        "WorldSkills Village": ["00:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"] },

      "26": {
        "Kazan Expo": ["06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
        "WorldSkills Village": ["00:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "18:30", "19:30", "20:30", "21:30", "22:30", "23:30"] },

      "27": {
        "Kazan Expo": ["07:00", "07:30", "08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"],
        "WorldSkills Village": ["00:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:30"] },

      "28": {
        "Kazan Expo": ["07:00", "07:30", "08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"],
        "WorldSkills Village": ["12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:30"] } } },



  methods: {
    showa: function (e) {
      let splitarray = e.currentTarget.id.split("-");
      $("#app main section").removeClass("active");
      $("#bigpage-" + splitarray[1] + "-" + splitarray[2] + "-" + splitarray[3]).addClass("active");
      $("#app main nav a").removeClass("active");
      $("#btn-" + splitarray[1] + "-" + splitarray[2] + "-" + splitarray[3]).addClass("active");

      $("#app main section ul.way-list").removeClass("active");
      $("#list-" + splitarray[1] + "-" + splitarray[2] + "-" + splitarray[3] + "-" + this.page).addClass("active");
      $("#app main section ul.way-selector li").removeClass("active");
      $("#btn-" + splitarray[1] + "-" + splitarray[2] + "-" + splitarray[3] + "-" + this.page).addClass("active");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    showb: function (e) {
      // console.log(e.currentTarget.id);
      let splitarray = e.currentTarget.id.split("-");
      $("#app main section ul.way-list").removeClass("active");
      $("#list-" + splitarray[1] + "-" + splitarray[2] + "-" + splitarray[3] + "-" + splitarray[4]).addClass("active");
      $("#app main section ul.way-selector li").removeClass("active");
      $("#btn-" + splitarray[1] + "-" + splitarray[2] + "-" + splitarray[3] + "-" + splitarray[4]).addClass("active");
      this.page = parseInt(splitarray[4]);
      console.log(typeof this.page);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    addTime: function (ori, rate) {
      let h, m;
      rate = parseInt(rate);
      h = parseInt(ori.split(':')[0]);
      m = parseInt(ori.split(':')[1]) + rate;
      // console.log(ori);
      while (m >= 60) {
        m -= 60;
        h += 1;
      }
      if (m < 10) {m = '0' + m;}
      if (h < 10) {h = '0' + h;}
      return h + ':' + m;
    } },

  mounted() {
    // console.log(this.buses)
    var _this = this;
    function update_timer() {
      let dater = new Date(),date,year,month,day,hour,minute,target_day,time_array,add_day,all_mins,left_hour,left_min,html = '';
      minute = dater.getUTCMinutes();
      hour = dater.getUTCHours() + 3;
      day = dater.getUTCDate();
      month = dater.getUTCMonth() + 1;
      year = dater.getUTCFullYear();
      if (hour > 23) {
        hour -= 24;
        day++;
      }
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day > 31) {
          day -= 31;
          month++;
        }
      } else if (month == 2) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 && year % 3200 != 0) {
          if (day > 29) {
            day -= 29;
            month++;
          }
        } else {
          if (day > 28) {
            day -= 28;
            month++;
          }
        }
      } else {
        if (day > 30) {
          day -= 30;
          month++;
        }
      }
      if (month > 12) {
        month -= 12;
        year++;
      }

//       console.log(year, month, day, hour, minute);
      if (year == 2019 && month == 8 && day < 29) {
        for (i = 0; i < Object.keys(_this.buses).length; i++) {
          if (day == Object.keys(_this.buses)[i]) {
            target_day = Object.keys(_this.buses)[i];
          }
        }
        if (target_day == undefined) {
          target_day = 16;
        }
        for (i = 0; i < Object.keys(_this.buses[target_day.toString()]).length; i++) {
          count_bus(target_day, 0);
//           console.log(time_array[0], left_hour, left_min, html);
        }

        function count_bus(inner_target_day, inner_type) {
          time_array = [];
          add_day = 0;
          all_mins = 0;
          if (inner_type == 0) {
            for (j = 0; j < _this.buses[inner_target_day.toString()][Object.keys(_this.buses[inner_target_day.toString()])[i]].length; j++) {
              if (hour <= _this.buses[inner_target_day.toString()][Object.keys(_this.buses[inner_target_day.toString()])[i]][j].split(":")[0]) {
                if (hour == _this.buses[inner_target_day.toString()][Object.keys(_this.buses[inner_target_day.toString()])[i]][j].split(":")[0]) {
                  if (minute < _this.buses[inner_target_day.toString()][Object.keys(_this.buses[inner_target_day.toString()])[i]][j].split(":")[1]) {
                    time_array.push(_this.buses[inner_target_day.toString()][Object.keys(_this.buses[inner_target_day.toString()])[i]][j]);
                  }
                } else {
                  time_array.push(_this.buses[inner_target_day.toString()][Object.keys(_this.buses[inner_target_day.toString()])[i]][j]);
                }
              }
            }
          } else if (inner_type == 1) {
            time_array.push(_this.buses[inner_target_day.toString()][Object.keys(_this.buses[inner_target_day.toString()])[i]][0]);
            add_day++;
          }

          // console.log();
          if (time_array[0] == undefined) {
            count_bus(target_day + 1, 1);
          } else {
            all_mins = parseInt((time_array[0].split(":")[0] - hour) * 60) + parseInt(time_array[0].split(":")[1] - minute) + 1440 * add_day + (target_day - day - 1) * 1440;
            left_hour = Math.floor(all_mins / 60);
            left_min = all_mins - 60 * left_hour;
            html += `
                  <div>
                     <div class="left">
                        <span class="up">
                           Next Bus
                        </span>
                        <span class="down">
                           to
                           ${Object.keys(_this.buses[target_day.toString()])[i]}
                        </span>
                     </div>
                     <div class="right">
                        <span class="hr-num">${left_hour}</span>
                        <span class="hr-text">h </span>
                        <span class="min-num">${left_min}</span>
                        <span class="min-text">m</span>
                     </div>
                  </div>`;
          }
        }
      } else {
        html = `No bus.`;
      }
      $("footer").html(html);
      $("body").css("padding-bottom", $("footer").height() + 32);
    }
    update_timer();
    setInterval(() => {
      update_timer();
    }, 3000);
  } });


$("#popup-btn").on("click", () => {
  $("#popup").addClass("active");
  $("body").addClass("has-popup");
});
$("#popup .background").on("click", e => {
  $("#popup").removeClass("active");
  $("body").removeClass("has-popup");
});
$("#popup .content").on("click", e => {
  e.stopPropagation();
});

$(document).ready(() => {
  let dater = new Date(),date,year,month,day,hour,minute;
  minute = dater.getUTCMinutes();
  hour = dater.getUTCHours() + 3;
  day = dater.getUTCDate();
  month = dater.getUTCMonth() + 1;
  year = dater.getUTCFullYear();
  if (hour > 23) {
    hour -= 24;
    day++;
  }
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    if (day > 31) {
      day -= 31;
      month++;
    }
  } else if (month == 2) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 && year % 3200 != 0) {
      if (day > 29) {
        day -= 29;
        month++;
      }
    } else {
      if (day > 28) {
        day -= 28;
        month++;
      }
    }
  } else {
    if (day > 30) {
      day -= 30;
      month++;
    }
  }
  if (month > 12) {
    month -= 12;
    year++;
  }
  if (year < 2019) {
    $("#bigpage-2019-08-16").addClass("active");
    $("#btn-2019-08-16").addClass("active");
    $("#list-2019-08-16-0").addClass("active");
    $("#btn-2019-08-16-0").addClass("active");
  } else if (year == 2019) {
    if (month < 8) {
      $("#bigpage-2019-08-16").addClass("active");
      $("#btn-2019-08-16").addClass("active");
      $("#list-2019-08-16-0").addClass("active");
      $("#btn-2019-08-16-0").addClass("active");
    } else if (month == 8) {
      if (day < 16) {
        $("#bigpage-2019-08-16").addClass("active");
        $("#btn-2019-08-16").addClass("active");
        $("#list-2019-08-16-0").addClass("active");
        $("#btn-2019-08-16-0").addClass("active");
      } else if (day > 28) {
        $("#bigpage-2019-08-28").addClass("active");
        $("#btn-2019-08-28").addClass("active");
        $("#list-2019-08-28-0").addClass("active");
        $("#btn-2019-08-28-0").addClass("active");
      } else {
        $("#bigpage-" + year + "-" + month + "-" + day).addClass("active");
        $("#btn-" + year + "-" + month + "-" + day).addClass("active");
        $("#list-" + year + "-" + month + "-" + day + "-0").addClass("active");
        $("#btn-" + year + "-" + month + "-" + day + "-0").addClass("active");
      }
    } else {
      $("#bigpage-2019-08-28").addClass("active");
      $("#btn-2019-08-28").addClass("active");
      $("#list-2019-08-28-0").addClass("active");
      $("#btn-2019-08-28-0").addClass("active");
    }
  } else {
    $("#bigpage-2019-08-28").addClass("active");
    $("#btn-2019-08-28").addClass("active");
    $("#list-2019-08-28-0").addClass("active");
    $("#btn-2019-08-28-0").addClass("active");
  }
});
