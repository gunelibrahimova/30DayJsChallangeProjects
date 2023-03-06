let CanvasContext;
let Camvas;

window.onload = function(){
    Canvas = document.getElementById('GameCanvas')
    CanvasContext=Canvas.getContext("2d")
    document.addEventListener("keydown", keyPush)
    setInterval(Game, 1000/15)
}

let GameSize = 25;
var xv = yv = 0; //ilerleme deyeri
let px = py =0; //baslangic deyeri
let ax = ay =15; // almanin deyeri
let trail = [];
let tail = 5;

function Game(){
    px +=xv;
    py +=yv;

    if(px < 0){ //ilan sol terefe deyerse
        px = GameSize-1
    }
    if(px> GameSize-1){ //ilan sag terefe deyerse
        px =0
    }
    if(py<0){ //ilan asagi deyerse
        py = GameSize -1
    }
    if(py > GameSize-1){ //ilan yuxari deyerse
        py = 0
    }

    CanvasContext.fillStyle = "black"
    CanvasContext.fillRect (0,0,Canvas.width, Canvas.height)

    CanvasContext.fillStyle = "lime"
    for (let i = 0; i < trail.length; i++) {
        CanvasContext.fillRect(trail[i].x*GameSize , trail[i].y*GameSize, GameSize-2,GameSize-2)
        
        if(trail[i].x==px && trail[i].y ==py){
            tail =5
        }
    }
    trail.push({x:px,y:py});
    while(trail.length > tail){
        trail.shift();
    }
    CanvasContext.fillStyle = "red"
    CanvasContext.fillRect(ax*GameSize , ay*GameSize, GameSize-2,GameSize-2)

    if(ax==px && ay==py){
        tail++;
        ax=Math.floor(Math.random() * GameSize)
        ay=Math.floor(Math.random() * GameSize)
    }
}

function keyPush(e){
    if(e.keyCode==37){ //sol
       xv=-1;
       yv=0;
    }
    if(e.keyCode==38){ //yukarı
        xv=0;
       yv=-1;
    }
    if(e.keyCode==39){ //sağ
        xv=1;
       yv=0;
    }
    if(e.keyCode==40){ //aşağı
        xv=0;
       yv=1;
    }
}
