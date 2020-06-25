var player 
var currentPlay = 0  //播到第幾首

//when API 準備好
function onYouTubeIframeAPIReady(){
    player = new YT.Player("player",
        {
            height: "390",
            width: "640",
            videoId: playList[currentPlay],
            playerVars: {
                "autoplay": 0,
                "controls": 0, //不顯示控制項
                "start": playTime[currentPlay][0],
                "end": playTime[currentPlay][1],
                "showinfo": 0, //關不掉上方標題
                "rel": 0, //還是會顯示，可透過預載影片擋住
                "iv_load_policy": 3 //不會顯示註解式行銷
            },
            events: {
                "onReady": onPlayerReady,
                "onStateChange": onPlayerStateChange
            }
        }
    )
}
//when player準備好
function onPlayerReady(event){
    $("#playButton").click(function(){
        $("#song-name").text(player.getVideoData().title)
        player.playVideo()
    })
}
//when player state change
function onPlayerStateChange(event){
    //播到預期秒數，換下一首
    if(Math.floor(player.getCurrentTime()) == playTime[currentPlay][1]){
        //正常播下首
        if(currentPlay < playList.length - 1) {
            currentPlay ++
            player.loadVideoById({
                "videoId": playList[currentPlay],
                "startSeconds": playTime[currentPlay][0],
                "endSeconds": playTime[currentPlay][1],
                "suggestedQuality": "large"
            })
        }else{
            currentPlay = 0
            player.cueVideoById({
                "videoId": playList[currentPlay],
                "startSeconds": playTime[currentPlay][0],
                "endSeconds": playTime[currentPlay][1],
                "suggestedQuality": "large"
            })
        }

        //影片開始抓標題
        if(player.getVideoLoaderFraction() > 0){
            $("#song-name").text(player.getVideoData().title)
        }
    }
}