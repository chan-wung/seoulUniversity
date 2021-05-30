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

  function pageFadeWrap(pageCnt,pageCntNum1,pageCntNum2,pageCntNum3){
    $(".changeSB > div:nth-child("+pageCnt+")").on("click",function(){
      $(this).children().attr("src", "images/circle"+pageCnt+"_2.png");
      // $(this).find("a").attr("src", "images/circle"+pageCnt+"1.png");
      console.log(pageCnt,pageCntNum1,pageCntNum2,pageCntNum3);
      pageFade(pageCntNum1);
      pageFade(pageCntNum2);
      pageFade(pageCntNum3);
      // pageFade(pageCntNum4);
      $(".slidelist > div").stop().fadeOut(1000);
      $(".slideimg"+pageCnt).stop().fadeIn(1000);
      // console.log("1");
      // console.log("pageCntNum1");
    });
  };
  function pageFade(btnCnt){
    $(".changeSB > div:nth-child("+btnCnt+")").children().attr("src", "images/circle"+btnCnt+"_1.png");
  };
  pageFadeWrap(1,2,3,4);
  pageFadeWrap(2,1,3,4);
  pageFadeWrap(3,1,2,4);
  pageFadeWrap(4,1,2,3);

  var current=0;
  var next=0;
  var currentIndex = 1;
  function slideleft(){
    var next=(current+1)%4;
    if(currentIndex<4){
      currentIndex++;
    }else{
      currentIndex=1;
    }

    // console.log(current);
    $(".slidelist div").hide();
    $(".slidelist").find("div").eq(current).stop().fadeOut(1000);
    $(".slidelist").find("div").eq(next).stop().fadeIn(1000);
    $(".changeSB > div").children().attr("src", "images/circle"+currentIndex+"_1.png");
    $(".changeSB > div:nth-child("+currentIndex+")").children().attr("src", "images/circle"+currentIndex+"_2.png");
    console.log($(".changeSB > div:nth-child("+currentIndex+")").children().attr("src"));
    // console.log(next);
    console.log(currentIndex);
    current=next;
  };

  // setInterval(slideleft,5000);
  var timer = setInterval(slideleft,7000);
  function interval(){
    console.log("interval");
    timer = setInterval(slideleft,7000);
  }
  function clear(){
    console.log("clear");
    clearInterval(timer);
    // clearInterval(slideleft);
  }

  $("div.changeSB").mouseenter(function(){
    clear();
  });
  $("div.changeSB").mouseleave(function(){
    interval()
  });
});
