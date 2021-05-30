$(function(){
  $(".nav > li").mouseenter(function(){
    $(".submenu, .sub_back").stop().slideDown(500);
    $(this).find("a:first").addClass("nav_active");
    $(".nav > li").eq(3).find("a:first").removeClass("nav_active");
  });
  $(".nav > li").mouseleave(function(){
    $(".submenu, .sub_back").stop().slideUp(500);
    $(this).find("a:first").removeClass("nav_active");
  });


  var wind = $(window),
      head = $('header'),
      headerOffsetTop = head.offset().top;

  wind.scroll(function(){

    if($(this).scrollTop() > headerOffsetTop){
      head.addClass('sticky');
      $(".logo").addClass("on");
      $(".none_box").addClass("on");
    } else {
      head.removeClass('sticky');
      $(".logo").removeClass("on");
      $(".none_box").removeClass("on");
    }
  });




  function pageFadeWrap(pageCnt,pageCntNum1,pageCntNum2,pageCntNum3,pageCntNum4){
    $(".changeSB > div:nth-child("+pageCnt+")").on("click",function(){
      $(this).children().attr("src", "images/circle"+pageCnt+"_2.png");
      // $(this).find("a").attr("src", "images/circle"+pageCnt+"1.png");
      pageFade(pageCntNum1);
      pageFade(pageCntNum2);
      pageFade(pageCntNum3);
      // pageFade(pageCntNum4);
      $(".slidelist > div").stop().fadeOut(1000);
      $(".slideimg"+pageCnt).stop().fadeIn(1000);
      console.log("1");
      console.log("pageCntNum1");

    });
  };
  function pageFade(btnCnt){
    $(".changeSB > div:nth-child("+btnCnt+")").children().attr("src", "images/circle"+btnCnt+"_1.png");
  };
  pageFadeWrap(1,2,3,4);
  pageFadeWrap(2,1,3,4);
  pageFadeWrap(3,1,2,4);
  pageFadeWrap(4,1,2,3);
  // function slideChange(slideNum){
  //   $(".btn"+sideNum).on("click", function(){
  //     $(".btn > ul").children("li").not(this).children("img").attr("src", "./imgs/btn1-1.jpg");
  //     $(this).attr("src","./imgs/btn1-2.jpg");
  //     $(".slide1").html("<video id='mainBackVideo' autoplay='autoplay' loop='loop'><source id='mainBackVideo_source' src='background_video"+videoNum+".mp4' type='video/mp4'></video>");
  //   })
  //   };
  //   videoChange(1);
  //   videoChange(2);
  //   videoChange(3);
  //  });
});
