var pops = 0; //set clicks to 0
function playPop() {//plays pop sound
    setTimeout(() => { popcat.src = "src/close.png"; }, 100);
    var audio = new Audio('src/sound/pop1.mp3');
    audio.play();
}

function popcatgopop() {//pops the cat
    pops += 1;
    document.getElementById("count").innerHTML = pops;
    var popcat = document.getElementById("popcat");
    popcat.src = "src/open.png";
    playPop(); //play sound

}

document.addEventListener('keydown', function (event) {//listens for space presses
    if (event.keyCode == 32) {//space key
        popcatgopop();
    }
});

document.onclick = function (event) {
    popcatgopop();

}

window.onload = function () {
    document.body.onselectstart = function () {
        return false;
    }
}