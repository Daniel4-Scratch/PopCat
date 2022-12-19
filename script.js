var popcatOpen = "src/open.png"
var popcatClose = "src/close.png"

let pops = 0
const storedClicks = localStorage.getItem('clicks');
pops = storedClicks;

function playPop() {//plays pop sound
    setTimeout(() => { popcat.src = popcatClose; }, 100);
    var audio = new Audio('src/sound/pop1.mp3');
    audio.play();
}

function popcatgopop() {//pops the cat
    pops += 1;
    localStorage.setItem('clicks', pops);
    document.getElementById("count").innerHTML = pops;
    const popcat = document.getElementById("popcat");
    popcat.src = popcatOpen;
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