$(document).ready(function () {
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
});