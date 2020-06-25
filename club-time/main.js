$(document).ready(function(){
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></th></tr>"
    )

    let oneDayMilliseconds = 24*60*60*1000

    let topicCount = topicArray.length
    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds)
        let trhead = "<tr>"
        if(topicArray[x]=="no"){
            trhead = "<tr style='background-color:gray'>"
        }
        $("#courseTable").append(
            trhead +
            "<td>"+ (x+1) +"</td>" +
            "<td>"+ thisDate.toLocaleDateString().slice(5) + "</td>" +
            "<td>"+ topicArray[x] +"</td>" +
            "</tr>"
        )
    }
})

function changeDate(time){
    let month = time.slice(5, 7)
    let day = time.slice(-2)
    $("#courseTable").empty()
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></th></tr>"
    )
    
    setMonthAndDay(month, day)
    
    let oneDayMilliseconds = 24*60*60*1000

    let topicCount = topicArray.length
    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds)
        let trhead = "<tr>"
        if(topicArray[x]=="no"){
            trhead = "<tr style='background-color:gray'>"
        }
        $("#courseTable").append(
            trhead +
            "<td>"+ (x+1) +"</td>" +
            "<td>"+ thisDate.toLocaleDateString().slice(5) + "</td>" +
            "<td>"+ topicArray[x] +"</td>" +
            "</tr>"
        )
    }
}