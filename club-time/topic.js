let topicArray = [
    "AI",
    "Web",
    "WireLess",
    "Data Structure",
    "Open Source",
    "Java",
    "CG",
]

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(3, 22)