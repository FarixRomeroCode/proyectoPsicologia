var start=document.getElementById('start');
var reset=document.getElementById('reset');
var stop=document.getElementById('stop'); 

var wm= document.getElementById('w_minutes')
var ws= document.getElementById('w_seconds')

var bm = document.getElementById("b_minutes")
var bs = document.getElementById("b_seconds")

var minIn = document.getElementById("min_in")
var secIn = document.getElementById("sec_in")

var startTimer;
var time;

start.addEventListener('click',function(){
    wm.innerText = minIn.value;
    time= minIn.value;
   
    if(startTimer===undefined){
       
        startTimer= setInterval(timer,1000)
        
    }else{
        alert("El tiempo esta corriendo :) haz tus trabajos!!")

    }

})

reset.addEventListener('click',function(){
    ws.innerText="00"
    wm.innerText=time;
    bm.innerText=1;
    bs.innerText="00";
    document.getElementById('counter')=0;
    stopInterval();
    startTimer=undefined;
})
stop.addEventListener('click',function(){
   stopInterval();
   startTimer=undefined;
})

function stopInterval(){
    clearInterval(startTimer)
}

function timer(){
        //work timer count
    console.log(wm.innerText , ws.innerText,bm.innerText, bs.innerText );

    if(ws.innerText!=0){ //inner text tengo la info
        ws.innerText--;
    }else if(wm.innerText!=0 && ws.innerText==0){
        ws.innerText = 59;
        wm.innerText --;
    }
    //break time :)
    if(wm.innerText ==0 && ws.innerText ==0){
        if(bs.innerText != 0){
            bs.innerText--;
        }else if(bm.innerText!=0 && bs.innerText==0){
            bs.innerText = 59;
            bm.innerText --;
        }
    }
    //ciclo :)
    // console.log(wm.innerText,bm.innerText, bs.innerText )
    if(wm.innerText==0 && ws.innerText ==0 && bm.innerText==0 && bs.innerText==0){
        console.log("entro",wm.innerText)
        wm.innerText =document.getElementById("min_in").value;
        // wm.innerText =1;
        ws.innerText ="00";
        bm.innerText =5;
        bs.innerText ="00";
        document.getElementById('counter').innerText++;

    }
    
}
