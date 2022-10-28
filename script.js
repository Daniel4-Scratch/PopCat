var pops = 0;
function playPop(popnumber) {
    if (popnumber === 1){
        setTimeout(() => { popcat.src = "src/close.png"; }, 100);
        var audio = new Audio('src/sound/pop1.mp3');
        audio.play();
    }else{
        setTimeout(() => { popcat.src = "src/close.png"; }, 100);
        var audio = new Audio('src/sound/pop2.mp3');
        audio.play();
    }
}

function popcatgopop() {
    pops+=1;
    document.getElementById("count").innerHTML = pops;
  var popcat = document.getElementById("popcat");
  popcat.src = "src/open.png";
  playPop(1);

}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
        popcatgopop();
    }
});

document.onclick= function(event){
    popcatgopop();
}

window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
}