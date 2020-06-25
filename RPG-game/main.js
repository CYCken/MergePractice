//mapArray決定每格的元素
//ctx HTML5 Canvas使用
//currentImgMainX/Y 決定主角所在位置

let mapArray, ctx, currentImgMainX, currentImgMainY
let imgMountain, imgMain, imgEnemy


//網頁元件載入完成後
$(document).ready(function(){
    //地圖
    //0: pass、1: stop、2: destination、3: enemy
    mapArray = [0, 1, 1, 0, 0, 0, 3, 1, 2]
    ctx = $("#myCanvas")[0].getContext("2d")

    //擺主角
    imgMain = new Image()
    imgMain.src = "RPG-game/images/spriteSheet.png"
    currentImgMainX = 0
    currentImgMainY = 0
    imgMain.onload = function(){
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMainX, currentImgMainY, 200, 200)
    }

    //擺障礙和敵人
    imgMountain = new Image()
    imgMountain.src = "RPG-game/images/material.png"
    imgEnemy = new Image()
    imgEnemy.src = "RPG-game/images/Enemy.png"
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x] == 1){
                    ctx.drawImage(imgMountain, 32, 65, 32, 32, x%3*200, Math.floor(x/3)*200, 200, 200)
                }else if(mapArray[x] == 3){
                    ctx.drawImage(imgEnemy, 7, 40, 104, 135, x%3*200, Math.floor(x/3)*200, 200, 200)
                }
            }
        }
    }
})

//按下button後
$(document).keydown(function(event){
    let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX
    //character移動，前進目標的圖片，依據character面向
    event.preventDefault()
    //prevent點鍵盤造成畫面移動
    //依據鍵盤，計算目標位置及character新方向圖片
    switch(event.originalEvent.code){
        case "ArrowLeft":
            targetImgMainX = currentImgMainX - 200
            targetImgMainY = currentImgMainY
            cutImagePositionX = 175
            break
        case "ArrowUp":
            targetImgMainX = currentImgMainX
            targetImgMainY = currentImgMainY - 200
            cutImagePositionX = 355
            break
        case "ArrowRight":
            targetImgMainX = currentImgMainX + 200
            targetImgMainY = currentImgMainY
            cutImagePositionX = 540
            break
        case "ArrowDown":
            targetImgMainX = currentImgMainX
            targetImgMainY = currentImgMainY + 200
            cutImagePositionX = 0
            break
        default:
            return
    }

    //在邊界內
    if(targetImgMainX <= 400 && targetImgMainX >= 0 && targetImgMainY <= 400 && targetImgMainY >= 0){
        targetBlock = targetImgMainX / 200 + targetImgMainY / 200 *3
    }else{
        targetBlock = -1
    }

    //清除charact原本所在位置
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200)
    if(targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3){
        //所有異常(出界、遇敵、遇障礙 都不動)
    }else {//正常情形
        $("#talkBox").empty()
        currentImgMainX = targetImgMainX
        currentImgMainY = targetImgMainY
    }
    //在新位置上呈現charact
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMainX, currentImgMainY, 200, 200)

    //對應文字顯示狀態
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界")
            break
        case 1:
            $("#talkBox").text("有山")
            break
        case 2:
            $("#talkBox").text("抵達終點")
            break
        case 3:
            $("#talkBox").text("哈囉")
            break
    }
})