$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.slider').slider({
      height: 1200,
      indicators: false,
      interval: 5000,
    });
    $(window).scroll(function(){
      if($(this).scrollTop() >= 100 ){
        $('.navigation').css('background-color', 'black');
      }else{
       $('.navigation').css('background-color', 'transparent');
      }
  });
  });

 
  
      

