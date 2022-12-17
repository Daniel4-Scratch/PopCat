console.log("Hello fellow computer nerd! So you want to cheat huh? Well I'll tell you how to cheat")
console.log("Type in the following code:")
console.log("var pops = 100000; //set pops to 100000")

var popcatOpen = "src/open.png"
var popcatClose = "src/close.png"


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var pops = 0

function playPop() {//plays pop sound
    setTimeout(() => { popcat.src = popcatClose; }, 100);
    var audio = new Audio('src/sound/pop1.mp3');
    audio.play();
}

function popcatgopop() {//pops the cat
    pops += 1;
    
    document.getElementById("count").innerHTML = pops;
    var popcat = document.getElementById("popcat");
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