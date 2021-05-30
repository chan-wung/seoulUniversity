$(function(){

  // img click
  $('.back_layer01, .back_layer02, .back_layer03, .back_layer04, .back_layer05, .back_layer06, .back_layer07, .back_layer08, .back_layer09').hide();

  // background snu-mark fade
  $('.slideImg').click(function(){
    $('.back01, .back02').stop().fadeOut(1000);
  });
  $('.back-close').click(function(){
    $('.back01, .back02').stop().fadeIn(1000);
  });

  // close-button hover
  $('.back-close').mouseenter(function(){
    // $('.back_layer01, .back_layer02, .back_layer03, .back_layer04, .back_layer05, .back_layer06, .back_layer07, .back_layer08, .back_layer09').css('opacity','0.8');
    $('.back-close').css('opacity','0.8');
  });
  $('.back-close').mouseleave(function(){
    // $('.back_layer01, .back_layer02, .back_layer03, .back_layer04, .back_layer05, .back_layer06, .back_layer07, .back_layer08, .back_layer09').css('opacity','1');
    $('.back-close').css('opacity','1');
  });
  // img01
  $('.img01').click(function(){
    $('.img01,.img02, .img03').removeClass('fade03');
    $('.img01, .img02, .img03').addClass('fade01');
    // $('.img02, .img03').addClass('fade02');
    $('.back_layer01').show().addClass('b01');
    $('.img01-back').stop().fadeIn(500);
  });

  $('.back-close1').click(function(){
    $('.img01').removeClass('fade01');
    $('.img02, .img03').removeClass('fade02');
    $('.img01,.img02, .img03').addClass('fade03');
    $('.back_layer01').stop().fadeOut(500);
    $('.img01-back').stop().fadeOut(1000);
  });

  // img02
  $('.img02').click(function(){
    $('.img01,.img02, .img03').removeClass('fade03');
    $('.img02, .img01, .img03').addClass('fade01');
    // $('.img01, .img03').addClass('fade02');
    $('.back_layer02').show().addClass('b01');
    $('.img02-back').stop().fadeIn(500);
  });
  $('.back-close2').click(function(){
    $('.img02, .img01, .img03').removeClass('fade01');
    // $('.img01, .img03').removeClass('fade02');
    $('.img01,.img02, .img03').addClass('fade03');
    $('.back_layer02').stop().fadeOut(500);
    $('.img02-back').stop().fadeOut(1000);
  });

  // img03
  $('.img03').click(function(){
    $('.img01,.img02, .img03').removeClass('fade03');
    $('.img03, .img01, .img02').addClass('fade01');
    // $('.img01, .img02').addClass('fade02');
    $('.back_layer03').show().addClass('b01');
    $('.img03-back').stop().fadeIn(500);
  });
  $('.back-close3').click(function(){
    $('.img03, .img01, .img02').removeClass('fade01');
    // $('.img01, .img02').removeClass('fade02');
    $('.img01,.img02, .img03').addClass('fade03');
    $('.back_layer03').stop().fadeOut(500);
    $('.img03-back').stop().fadeOut(1000);
  });

  // img04
  $('.img04').click(function(){
    $('.img04,.img05, .img06').removeClass('fade03');
    $('.img04, .img05, .img06').addClass('fade01');
    // $('.img05, .img06').addClass('fade02');
    $('.back_layer04').show().addClass('b01');
    $('.img04-back').stop().fadeIn(500);
  });
  $('.back-close4').click(function(){
    $('.img04, .img05, .img06').removeClass('fade01');
    // $('.img05, .img06').removeClass('fade02');
    $('.img04,.img05, .img06').addClass('fade03');
    $('.back_layer04').stop().fadeOut(500);
    $('.img04-back').stop().fadeOut(1000);
  });

  // img05
  $('.img05').click(function(){
    $('.img04,.img05, .img06').removeClass('fade03');
    $('.img05, .img04, .img06').addClass('fade01');
    // $('.img04, .img06').addClass('fade02');
    $('.back_layer05').show().addClass('b01');
    $('.img05-back').stop().fadeIn(500);
  });
  $('.back-close5').click(function(){
    $('.img05, .img04, .img06').removeClass('fade01');
    // $('.img04, .img06').removeClass('fade02');
    $('.img04,.img05, .img06').addClass('fade03');
    $('.back_layer05').stop().fadeOut(500);
    $('.img05-back').stop().fadeOut(1000);
  });

  // img06
  $('.img06').click(function(){
    $('.img04,.img05, .img06').removeClass('fade03');
    $('.img06, .img04, .img05').addClass('fade01');
    // $('.img04, .img05').addClass('fade02');
    $('.back_layer06').show().addClass('b01');
    $('.img06-back').stop().fadeIn(500);
  });
  $('.back-close6').click(function(){
    $('.img06, .img04, .img05').removeClass('fade01');
    // $('.img04, .img05').removeClass('fade02');
    $('.img04,.img05, .img06').addClass('fade03');
    $('.back_layer06').stop().fadeOut(500);
    $('.img06-back').stop().fadeOut(1000);
  });

  // img07
  $('.img07').click(function(){
    $('.img07,.img08, .img09').removeClass('fade03');
    $('.img07, .img08, .img09').addClass('fade01');
    // $('.img08, .img09').addClass('fade02');
    $('.back_layer07').show().addClass('b01');
    $('.img07-back').stop().fadeIn(500);
  });
  $('.back-close7').click(function(){
    $('.img07, .img08, .img09').removeClass('fade01');
    // $('.img08, .img09').removeClass('fade02');
    $('.img07,.img08, .img09').addClass('fade03');
    $('.back_layer07').stop().fadeOut(500);
    $('.img07-back').stop().fadeOut(1000);
  });

  // img08
  $('.img08').click(function(){
    $('.img07,.img08, .img09').removeClass('fade03');
    $('.img08, .img07, .img09').addClass('fade01');
    // $('.img07, .img09').addClass('fade02');
    $('.back_layer08').show().addClass('b01');
    $('.img08-back').stop().fadeIn(500);
  });
  $('.back-close8').click(function(){
    $('.img08, .img07, .img09').removeClass('fade01');
    // $('.img07, .img09').removeClass('fade02');
    $('.img07,.img08, .img09').addClass('fade03');
    $('.back_layer08').stop().fadeOut(500);
    $('.img08-back').stop().fadeOut(1000);
  });

  // img09
  $('.img09').click(function(){
    $('.img07,.img08, .img09').removeClass('fade03');
    $('.img09, .img07, .img08').addClass('fade01');
    // $('.img07, .img08').addClass('fade02');
    $('.back_layer09').show().addClass('b01');
    $('.img09-back').stop().fadeIn(500);
  });
  $('.back-close9').click(function(){
    $('.img09, .img07, .img08').removeClass('fade01');
    // $('.img07, .img08').removeClass('fade02');
    $('.img07,.img08, .img09').addClass('fade03');
    $('.back_layer09').stop().fadeOut(500);
    $('.img09-back').stop().fadeOut(1000);
  });



  // rbtn, lbtn slide
  var slideCount01 = $('.slideImg').length;
  var currentIndex01= 1;
  // var move = true;
  // var p = -33.333;

  function move_right(index){

    if(index==2){
      $('.slideList01').animate({left: -100+"%"},800);
    }
    if(index==3){
      $('.slideList01').animate({left: -199+"%"},800);
    }
  }
  function move_left(index){

    if(index==1){
      $('.slideList01').animate({left: 0+"%"},800);
    }
    if(index==2){
      $('.slideList01').animate({left: -100+"%"},800);
    }
  }

  $('.rbtn').click(function(){
    $('.img-back').stop().fadeOut(500);
    $('.back01, .back02').stop().fadeIn(1000);

    currentIndex01++;
    if(currentIndex01==3){
      currentIndex01=3;
    }
    if(currentIndex01<4){
        move_right(currentIndex01);
    }
  });
  $('.lbtn').click(function(){
    $('.img-back').stop().fadeOut(500);
    $('.back01, .back02').stop().fadeIn(1000);

    currentIndex01--;
    if(currentIndex01==1){
      currentIndex01=1;
    }
    if(currentIndex01>=1){
        move_left(currentIndex01);
  };

});


});
