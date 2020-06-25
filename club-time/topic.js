let topicArray = [
    "sleep",
    "eat",
    "no",
    "play",
    "take a break",
    "no",
    "travel",
]

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(3, 22)