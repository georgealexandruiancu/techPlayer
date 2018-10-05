$(document).ready(function () {
    setTimeout(function () {
        $('#tracks-holder li').on('click', function (e) {
            // console.log("seaprinde")
            e.preventDefault();
            $('#tracks-holder li').removeClass('actives');
            $(this).addClass('actives');
            playMaxBtn.style.color = "#e73cd3";
            playMiniBtn.style.color = "#e73cd3";
            x.volume = 1;
        });
    }, 1000);
    
    $('#box').on('click', function () {
        $('ul').toggleClass('open');
    });
    var buttonMenu  = document.getElementById("box");
    var fancyNav = document.getElementsByClassName('fancyNav')[0];
    buttonMenu.addEventListener("click", function (){ 
        if (fancyNav.style.width == '278px') {
            fancyNav.style.width = '0';
            buttonMenu.style.position = "fixed";
            buttonMenu.style.top = "0px";
            buttonMenu.style.left = "0px";
            buttonMenu.style.backgroundColor = "black"; 
            $('ul').removeClass('open');
        }
        else {
            fancyNav.style.width = '278px';
            $('ul').addClass('open');
            buttonMenu.style.position = "absolute";
        }  
    });
    var playMaxBtn = document.querySelector("#playMaxBtn");
    var pausedMaxBtn = document.querySelector("#pausedMaxBtn");
    var nextMaxBtn = document.querySelector("#nextMaxBtn");
    var mutedMaxBtn = document.querySelector("#mutedMaxBtn");
    var playMiniBtn = document.querySelector("#playMiniBtn");
    var pausedMiniBtn = document.querySelector("#pausedMiniBtn");
    var nextMiniBtn = document.querySelector("#nextMiniBtn");
    var mutedMiniBtn = document.querySelector("#mutedMiniBtn");

    var x = document.getElementById("techMusic")
    playMaxBtn.addEventListener("click", function(){
        x.play();
        x.volume = 1;
        this.style.color = "#e73cd3";
        pausedMaxBtn.style.color="white";
        mutedMaxBtn.style.color = "white";

    });
    pausedMaxBtn.addEventListener("click", function () {
        x.pause();
        this.style.color = "#e73cd3";
        playMaxBtn.style.color="white";
    });
    mutedMaxBtn.addEventListener("click", function () {
        if(x.volume == 1){
            x.volume = 0;
            this.style.color = "#e73cd3";
            playMaxBtn.style.color = "white";
            pausedMaxBtn.style.color = "white";
        }else{
            x.volume = 1;
            this.style.color = "white";
            playMaxBtn.style.color = "#e73cd3";

        }
        
    });
    playMiniBtn.addEventListener("click", function () {
        x.play();
        x.volume = 1;
        this.style.color = "#e73cd3";
        pausedMiniBtn.style.color = "white";
        mutedMiniBtn.style.color = "white";

    });
    pausedMiniBtn.addEventListener("click", function () {
        x.pause();
        this.style.color = "#e73cd3";
        playMiniBtn.style.color = "white";
    });
    mutedMiniBtn.addEventListener("click", function () {
        if (x.volume == 1) {
            x.volume = 0;
            this.style.color = "#e73cd3";
            playMiniBtn.style.color = "white";
            pausedMiniBtn.style.color = "white";
        } else {
            x.volume = 1;
            this.style.color = "white";
            playMiniBtn.style.color = "#e73cd3";

        }

    });
    // var seeking = false;
    // seekslider = document.getElementById("seekslider");
    // seekslider.addEventListener("mousedown", function (event) { seeking = true; seek(event); });
    // seekslider.addEventListener("mousemove", function (event) { seek(event); });
    // seekslider.addEventListener("mouseup", function () { seeking = false; });
    // function seek(event) {
    //     if (seeking) {
    //         seekslider.value = event.clientX - seekslider.offsetLeft;
    //         seekto = x.duration * (seekslider.value / 100);
    //         x.currentTime = seekto;
    //     }
    // }
    
});
