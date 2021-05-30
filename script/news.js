$(function(){


  $(".r_arrow").click(function(){
    $('.news_imglist > ul').animate({marginLeft:-350+"px"}, 500, function(){
          $(".news_imglist > ul > li:first").appendTo(".news_imglist > ul");
          $('.news_imglist > ul').css('margin-left','0px');
    });
  });
  $(".l_arrow").click(function(){
    $('.news_imglist > ul').animate({marginLeft:350+"px"}, 500, function(){
          $(".news_imglist > ul > li:last").prependTo(".news_imglist > ul");
          $('.news_imglist > ul').css('margin-left','0px');
    });
  });


  $(".news_imglist > ul > li").mouseenter(function(){
    $(this).find(".overlay").addClass("on");
  });
  $(".news_imglist > ul > li").mouseleave(function(){
    $(this).find(".overlay").removeClass("on");
  });




  $(this).find(".notice_box3 > .notice_main > ul > li").mouseenter(function(){
    $(this).find(".notice_show").show();
  });
  $(this).find(".notice_box3 > .notice_main > ul > li").mouseleave(function(){
    $(this).find(".notice_show").hide();
  });

  $(this).find(".1mon").click(function(){
    $(".notice_popup1").show();
  });
  $(this).find(".notice_popup1").mouseleave(function(){
    $(".notice_popup1").hide();
  });
  $(this).find(".2mon").click(function(){
    $(".notice_popup2").show();
  });
  $(this).find(".notice_popup2").mouseleave(function(){
    $(".notice_popup2").hide();
  });
  $(this).find(".3mon").click(function(){
    $(".notice_popup3").show();
  });
  $(this).find(".notice_popup3").mouseleave(function(){
    $(".notice_popup3").hide();
  });
  $(this).find(".4mon").click(function(){
    $(".notice_popup4").show();
  });
  $(this).find(".notice_popup4").mouseleave(function(){
    $(".notice_popup4").hide();
  });
  $(this).find(".5mon").click(function(){
    $(".notice_popup5").show();
  });
  $(this).find(".notice_popup5").mouseleave(function(){
    $(".notice_popup5").hide();
  });
  $(this).find(".6mon").click(function(){
    $(".notice_popup6").show();
  });
  $(this).find(".notice_popup6").mouseleave(function(){
    $(".notice_popup6").hide();
  });
  $(this).find(".7mon").click(function(){
    $(".notice_popup7").show();
  });
  $(this).find(".notice_popup7").mouseleave(function(){
    $(".notice_popup7").hide();
  });
  $(this).find(".8mon").click(function(){
    $(".notice_popup8").show();
  });
  $(this).find(".notice_popup8").mouseleave(function(){
    $(".notice_popup8").hide();
  });
  $(this).find(".9mon").click(function(){
    $(".notice_popup9").show();
  });
  $(this).find(".notice_popup9").mouseleave(function(){
    $(".notice_popup9").hide();
  });
  $(this).find(".10mon").click(function(){
    $(".notice_popup10").show();
  });
  $(this).find(".notice_popup10").mouseleave(function(){
    $(".notice_popup10").hide();
  });
  $(this).find(".11mon").click(function(){
    $(".notice_popup11").show();
  });
  $(this).find(".notice_popup11").mouseleave(function(){
    $(".notice_popup11").hide();
  });
  $(this).find(".12mon").click(function(){
    $(".notice_popup12").show();
  });
  $(this).find(".notice_popup12").mouseleave(function(){
    $(".notice_popup12").hide();
  });





});
