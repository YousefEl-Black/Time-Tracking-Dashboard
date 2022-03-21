const myArray = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let btns = document.querySelectorAll(".project .main-card .bottom > a");

let active = function (num) {
  for (i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("active")) {
      btns[i].classList.remove("active");
    }
  }
  btns[num].classList.add("active");

  if (document.querySelector(".project .main-card .bottom a:nth-child(1)").classList.contains("active")) {
    document.querySelector(".project .work .text .time span").innerHTML = myArray[0].timeframes.daily.current;
    document.querySelector(".project .work .text .time-ago span:nth-child(1)").innerHTML = "Day";  
    document.querySelector(".project .work .text .time-ago span:nth-child(2)").innerHTML = myArray[0].timeframes.daily.previous;  
    document.querySelector(".project .play .text .time span").innerHTML = myArray[1].timeframes.daily.current;
    document.querySelector(".project .play .text .time-ago span:nth-child(1)").innerHTML = "Day";  
    document.querySelector(".project .play .text .time-ago span:nth-child(2)").innerHTML = myArray[1].timeframes.daily.previous;  
    document.querySelector(".project .study .text .time span").innerHTML = myArray[2].timeframes.daily.current;
    document.querySelector(".project .study .text .time-ago span:nth-child(1)").innerHTML = "Day";  
    document.querySelector(".project .study .text .time-ago span:nth-child(2)").innerHTML = myArray[2].timeframes.daily.previous;  
    document.querySelector(".project .exercise .text .time span").innerHTML = myArray[3].timeframes.daily.current;
    document.querySelector(".project .exercise .text .time-ago span:nth-child(1)").innerHTML = "Day";  
    document.querySelector(".project .exercise .text .time-ago span:nth-child(2)").innerHTML = myArray[3].timeframes.daily.previous;  
    document.querySelector(".project .social .text .time span").innerHTML = myArray[4].timeframes.daily.current;  
    document.querySelector(".project .social .text .time-ago span:nth-child(1)").innerHTML = "Day";  
    document.querySelector(".project .social .text .time-ago span:nth-child(2)").innerHTML = myArray[4].timeframes.daily.previous;  
    document.querySelector(".project .self-care .text .time span").innerHTML = myArray[5].timeframes.daily.current;  
    document.querySelector(".project .self-care .text .time-ago span:nth-child(1)").innerHTML = "Day";  
    document.querySelector(".project .self-care .text .time-ago span:nth-child(2)").innerHTML = myArray[5].timeframes.daily.previous;  
  }
  
  if (document.querySelector(".project .main-card .bottom a:nth-child(2)").classList.contains("active")) {
    document.querySelector(".project .work .text .time span").innerHTML = myArray[0].timeframes.weekly.current;
    document.querySelector(".project .work .text .time-ago span:nth-child(1)").innerHTML = "Week";  
    document.querySelector(".project .work .text .time-ago span:nth-child(2)").innerHTML = myArray[0].timeframes.weekly.previous;  
    document.querySelector(".project .play .text .time span").innerHTML = myArray[1].timeframes.weekly.current;
    document.querySelector(".project .play .text .time-ago span:nth-child(1)").innerHTML = "Week";  
    document.querySelector(".project .play .text .time-ago span:nth-child(2)").innerHTML = myArray[1].timeframes.weekly.previous;  
    document.querySelector(".project .study .text .time span").innerHTML = myArray[2].timeframes.weekly.current;
    document.querySelector(".project .study .text .time-ago span:nth-child(1)").innerHTML = "Week";  
    document.querySelector(".project .study .text .time-ago span:nth-child(2)").innerHTML = myArray[2].timeframes.weekly.previous;  
    document.querySelector(".project .exercise .text .time span").innerHTML = myArray[3].timeframes.weekly.current;
    document.querySelector(".project .exercise .text .time-ago span:nth-child(1)").innerHTML = "Week";  
    document.querySelector(".project .exercise .text .time-ago span:nth-child(2)").innerHTML = myArray[3].timeframes.weekly.previous;  
    document.querySelector(".project .social .text .time span").innerHTML = myArray[4].timeframes.weekly.current;  
    document.querySelector(".project .social .text .time-ago span:nth-child(1)").innerHTML = "Week";  
    document.querySelector(".project .social .text .time-ago span:nth-child(2)").innerHTML = myArray[4].timeframes.weekly.previous;  
    document.querySelector(".project .self-care .text .time span").innerHTML = myArray[5].timeframes.weekly.current;  
    document.querySelector(".project .self-care .text .time-ago span:nth-child(1)").innerHTML = "Week";  
    document.querySelector(".project .self-care .text .time-ago span:nth-child(2)").innerHTML = myArray[5].timeframes.weekly.previous;  
  }
  
  if (document.querySelector(".project .main-card .bottom a:nth-child(3)").classList.contains("active")) {
    document.querySelector(".project .work .text .time span").innerHTML = myArray[0].timeframes.monthly.current;
    document.querySelector(".project .work .text .time-ago span:nth-child(1)").innerHTML = "Month";  
    document.querySelector(".project .work .text .time-ago span:nth-child(2)").innerHTML = myArray[0].timeframes.monthly.previous;  
    document.querySelector(".project .play .text .time span").innerHTML = myArray[1].timeframes.monthly.current;
    document.querySelector(".project .play .text .time-ago span:nth-child(1)").innerHTML = "Month";  
    document.querySelector(".project .play .text .time-ago span:nth-child(2)").innerHTML = myArray[1].timeframes.monthly.previous;  
    document.querySelector(".project .study .text .time span").innerHTML = myArray[2].timeframes.monthly.current;
    document.querySelector(".project .study .text .time-ago span:nth-child(1)").innerHTML = "Month";  
    document.querySelector(".project .study .text .time-ago span:nth-child(2)").innerHTML = myArray[2].timeframes.monthly.previous;  
    document.querySelector(".project .exercise .text .time span").innerHTML = myArray[3].timeframes.monthly.current;
    document.querySelector(".project .exercise .text .time-ago span:nth-child(1)").innerHTML = "Month";  
    document.querySelector(".project .exercise .text .time-ago span:nth-child(2)").innerHTML = myArray[3].timeframes.monthly.previous;  
    document.querySelector(".project .social .text .time span").innerHTML = myArray[4].timeframes.monthly.current;  
    document.querySelector(".project .social .text .time-ago span:nth-child(1)").innerHTML = "Month";  
    document.querySelector(".project .social .text .time-ago span:nth-child(2)").innerHTML = myArray[4].timeframes.monthly.previous;  
    document.querySelector(".project .self-care .text .time span").innerHTML = myArray[5].timeframes.monthly.current;  
    document.querySelector(".project .self-care .text .time-ago span:nth-child(1)").innerHTML = "Month";  
    document.querySelector(".project .self-care .text .time-ago span:nth-child(2)").innerHTML = myArray[5].timeframes.monthly.previous;  
  }
}


if (document.querySelector(".project .main-card .bottom a:nth-child(1)").classList.contains("active")) {
  document.querySelector(".project .work .text .time span").innerHTML = myArray[0].timeframes.daily.current;
  document.querySelector(".project .work .text .time-ago span:nth-child(1)").innerHTML = "Day";  
  document.querySelector(".project .work .text .time-ago span:nth-child(2)").innerHTML = myArray[0].timeframes.daily.previous;  
  document.querySelector(".project .play .text .time span").innerHTML = myArray[1].timeframes.daily.current;
  document.querySelector(".project .play .text .time-ago span:nth-child(1)").innerHTML = "Day";  
  document.querySelector(".project .play .text .time-ago span:nth-child(2)").innerHTML = myArray[1].timeframes.daily.previous;  
  document.querySelector(".project .study .text .time span").innerHTML = myArray[2].timeframes.daily.current;
  document.querySelector(".project .study .text .time-ago span:nth-child(1)").innerHTML = "Day";  
  document.querySelector(".project .study .text .time-ago span:nth-child(2)").innerHTML = myArray[2].timeframes.daily.previous;  
  document.querySelector(".project .exercise .text .time span").innerHTML = myArray[3].timeframes.daily.current;
  document.querySelector(".project .exercise .text .time-ago span:nth-child(1)").innerHTML = "Day";  
  document.querySelector(".project .exercise .text .time-ago span:nth-child(2)").innerHTML = myArray[3].timeframes.daily.previous;  
  document.querySelector(".project .social .text .time span").innerHTML = myArray[4].timeframes.daily.current;  
  document.querySelector(".project .social .text .time-ago span:nth-child(1)").innerHTML = "Day";  
  document.querySelector(".project .social .text .time-ago span:nth-child(2)").innerHTML = myArray[4].timeframes.daily.previous;  
  document.querySelector(".project .self-care .text .time span").innerHTML = myArray[5].timeframes.daily.current;  
  document.querySelector(".project .self-care .text .time-ago span:nth-child(1)").innerHTML = "Day";  
  document.querySelector(".project .self-care .text .time-ago span:nth-child(2)").innerHTML = myArray[5].timeframes.daily.previous;  
}

if (document.querySelector(".project .main-card .bottom a:nth-child(2)").classList.contains("active")) {
  document.querySelector(".project .work .text .time span").innerHTML = myArray[0].timeframes.weekly.current;
  document.querySelector(".project .work .text .time-ago span:nth-child(1)").innerHTML = "Week";  
  document.querySelector(".project .work .text .time-ago span:nth-child(2)").innerHTML = myArray[0].timeframes.weekly.previous;  
  document.querySelector(".project .play .text .time span").innerHTML = myArray[1].timeframes.weekly.current;
  document.querySelector(".project .play .text .time-ago span:nth-child(1)").innerHTML = "Week";  
  document.querySelector(".project .play .text .time-ago span:nth-child(2)").innerHTML = myArray[1].timeframes.weekly.previous;  
  document.querySelector(".project .study .text .time span").innerHTML = myArray[2].timeframes.weekly.current;
  document.querySelector(".project .study .text .time-ago span:nth-child(1)").innerHTML = "Week";  
  document.querySelector(".project .study .text .time-ago span:nth-child(2)").innerHTML = myArray[2].timeframes.weekly.previous;  
  document.querySelector(".project .exercise .text .time span").innerHTML = myArray[3].timeframes.weekly.current;
  document.querySelector(".project .exercise .text .time-ago span:nth-child(1)").innerHTML = "Week";  
  document.querySelector(".project .exercise .text .time-ago span:nth-child(2)").innerHTML = myArray[3].timeframes.weekly.previous;  
  document.querySelector(".project .social .text .time span").innerHTML = myArray[4].timeframes.weekly.current;  
  document.querySelector(".project .social .text .time-ago span:nth-child(1)").innerHTML = "Week";  
  document.querySelector(".project .social .text .time-ago span:nth-child(2)").innerHTML = myArray[4].timeframes.weekly.previous;  
  document.querySelector(".project .self-care .text .time span").innerHTML = myArray[5].timeframes.weekly.current;  
  document.querySelector(".project .self-care .text .time-ago span:nth-child(1)").innerHTML = "Week";  
  document.querySelector(".project .self-care .text .time-ago span:nth-child(2)").innerHTML = myArray[5].timeframes.weekly.previous;  
}

if (document.querySelector(".project .main-card .bottom a:nth-child(3)").classList.contains("active")) {
  document.querySelector(".project .work .text .time span").innerHTML = myArray[0].timeframes.monthly.current;
  document.querySelector(".project .work .text .time-ago span:nth-child(1)").innerHTML = "Month";  
  document.querySelector(".project .work .text .time-ago span:nth-child(2)").innerHTML = myArray[0].timeframes.monthly.previous;  
  document.querySelector(".project .play .text .time span").innerHTML = myArray[1].timeframes.monthly.current;
  document.querySelector(".project .play .text .time-ago span:nth-child(1)").innerHTML = "Month";  
  document.querySelector(".project .play .text .time-ago span:nth-child(2)").innerHTML = myArray[1].timeframes.monthly.previous;  
  document.querySelector(".project .study .text .time span").innerHTML = myArray[2].timeframes.monthly.current;
  document.querySelector(".project .study .text .time-ago span:nth-child(1)").innerHTML = "Month";  
  document.querySelector(".project .study .text .time-ago span:nth-child(2)").innerHTML = myArray[2].timeframes.monthly.previous;  
  document.querySelector(".project .exercise .text .time span").innerHTML = myArray[3].timeframes.monthly.current;
  document.querySelector(".project .exercise .text .time-ago span:nth-child(1)").innerHTML = "Month";  
  document.querySelector(".project .exercise .text .time-ago span:nth-child(2)").innerHTML = myArray[3].timeframes.monthly.previous;  
  document.querySelector(".project .social .text .time span").innerHTML = myArray[4].timeframes.monthly.current;  
  document.querySelector(".project .social .text .time-ago span:nth-child(1)").innerHTML = "Month";  
  document.querySelector(".project .social .text .time-ago span:nth-child(2)").innerHTML = myArray[4].timeframes.monthly.previous;  
  document.querySelector(".project .self-care .text .time span").innerHTML = myArray[5].timeframes.monthly.current;  
  document.querySelector(".project .self-care .text .time-ago span:nth-child(1)").innerHTML = "Month";  
  document.querySelector(".project .self-care .text .time-ago span:nth-child(2)").innerHTML = myArray[5].timeframes.monthly.previous;  
}