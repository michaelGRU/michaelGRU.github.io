
// my linux file system ;)
function displayIframe(id, filename) {
    var out;

    if (filename.endsWith("pdf")) {
        out = "<iframe src=\"./html/" + filename + "#toolbar=0&navpanes=0&zoom=110\"></iframe>";
    } else {
        out = "<iframe src=\"./html/" + filename + "\"></iframe>";
    }


    document.getElementById(id).innerHTML = out;


    var pwd = "~/" + filename;
    document.getElementById("pwd").innerHTML = pwd;

    var element = document.getElementById("pwd")
    var parent = element.parentNode;
    var link = document.createElement('a');
    link.href = './html/' + filename;
    link.target = "_blank";
    link.appendChild(element.cloneNode(true));
    parent.replaceChild(link, element);

    // var myPix = new Array("../img/robot/1.png", "../img/robot/2.png","../img/robot/3.png","../img/robot/6.png","../img/robot/7.png","../img/robot/8.png","../img/robot/10.png","../img/robot/11.png","../img/robot/14.png","../img/robot/15.png",);
    // var randomNum = Math.floor(Math.random() * myPix.length);

    // document.getElementById("myImg").src= myPix[randomNum];
    var iframe = document.getElementById(id);

    fadeOut(iframe, 2000);

}

function bg_rm() {

    var temp = document.getElementById("tableft");
    temp.setAttribute('style', "background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('../img/Picture1.png'); background-size: cover; background-repeat: no-repeat;  background-position: center;")
}


function bg_sum() {
    document.getElementById("myImg").src = "../img/robot.png";
    var temp = document.getElementById("tableft");
    temp.setAttribute('style', "background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('../img/Picture1.png'); background-size: cover; background-repeat: no-repeat;  background-position: center;")
}

function bg_home() {
    document.getElementById("myImg").src = "../img/red_blue_robo.png";
    var temp = document.getElementById("tableft");
    temp.setAttribute('style', "background: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('../img/homeless.png'); background-size: cover; background-repeat: no-repeat;")
}

function bg_sur() {
    document.getElementById("myImg").src = "../img/robo_glass.png";
    var temp = document.getElementById("tableft");
    temp.setAttribute('style', "background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('../img/sur.png'); background-size: cover; background-repeat: no-repeat;")
}

function bg_dis() {
    document.getElementById("myImg").src = "../img/robo_x.png";
    var temp = document.getElementById("tableft");
    temp.setAttribute('style', "background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('../img/dis.png'); background-size: cover; background-repeat: no-repeat;")
}

function bg_bully() {
    document.getElementById("myImg").src = "../img/robo_pirate.png";
    var temp = document.getElementById("tableft");
    temp.setAttribute('style', "background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('../img/bully.png'); background-size: cover; background-repeat: no-repeat;")
}

function bg_generic() {

    var myPix = new Array("../img/robot/1.png", "../img/robot/2.png", "../img/robot/3.png", "../img/robot/4.png", "../img/robot/5.png", "../img/robot/6.png");
    var randomNum = Math.floor(Math.random() * myPix.length);

    document.getElementById("myImg").src = myPix[randomNum];

    var temp = document.getElementById("tableft");
    var bmyPix = new Array("../img/rand_bg/1.jpeg", "../img/rand_bg/2.jpg","../img/rand_bg/3.jpg","../img/rand_bg/4.jpg","../img/rand_bg/5.png","../img/rand_bg/6.jpg","../img/rand_bg/7.jpg","../img/rand_bg/8.jpg","../img/rand_bg/9.png");
    var randomNum1 = Math.floor(Math.random() * bmyPix.length);

   
    temp.setAttribute('style', "background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(" + bmyPix[randomNum1] + "); background-size: cover; background-repeat: no-repeat;");



}





global_click = 0;

function playsound() {
    var audio = document.getElementById("audio");
    if (global_click == 0) {
        audio.play();
    }
    global_click++;


    // document.getElementById("typewriter").style.display = "none";
    // document.getElementById("filesys").style.display = "block";


    // document.getElementById("typewriter").style.cursor = "pointer";
    // document.getElementById("typewriter").onclick = function(){
    //     var audio = document.getElementById("audio1");
    //     if (global_click1 == 0) {
    //         audio.play();
    //     }
    //     global_click1++;
    //     document.getElementById("typewriter").innerHTML = ""
    //     document.getElementById("typewriter").style.cursor = "default";
    // }
}



// document.getElementById("robot1").onclick = function () {
//     var audio = document.getElementById("audio1");
//     if (audio.paused) audio.play();
//     else audio.pause();

//     audio.addEventListener("ended", function () {
//         audio.currentTime = 0;

//     });

// };







// loading screen
let spinnerWrapper = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
    // setTimeout(()=>{spinnerWrapper.parentElement.removeChild(spinnerWrapper);}, 3000);
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});






// toggle file icon
function classToggle(x) {
    document.getElementById(x).classList.toggle('fa-folder');
    document.getElementById(x).classList.toggle('fa-folder-open');
}
document.querySelector('#sna').addEventListener('click', () => classToggle("divtitle1"));
document.querySelector('#ss').addEventListener('click', () => classToggle("divtitle2"));
document.querySelector('#ds').addEventListener('click', () => classToggle("divtitle3"));
// document.querySelector('#am').addEventListener('click', () => classToggle("divtitle4"));

function openElement(evt, element_name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(element_name).style.display = "block";
    evt.currentTarget.className += " active";


}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//collapsed
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    document.getElementById("myImg").src = "../img/robo_glass.png"
    playsound();
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}




function fadeOut(el, duration) {

    /*
     * @param el - The element to be faded out.
     * @param duration - Animation duration in milliseconds.
     */

    var step = 5 / duration,
        opacity = 0.5;
    function next() {
        if (opacity >= 1) { return; }
        el.style.opacity = ( opacity += step );
        setTimeout(next, 10);
    }
    next();
}

