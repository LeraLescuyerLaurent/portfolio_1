$(document).ready(function () { 
    $('.toggle').click(function () {  
        $('.toggle').toggleClass('active');
        $('nav ul').toggleClass('menu-active');
    });
 });