$(function(){

  $(".r_page").click(function(){
    $(".news_pagebox_list").animate({left:-750+"px"},1000,function(){
      $(".news_pagebox_list div:first-child").appendTo(".news_pagebox_list");//1번 사진을 3번 뒤로 붙이기
      $(".news_pagebox_list").css('left','0');
    });
  });
  
  $(".l_page").click(function(){
    $(".news_pagebox_list div:last-child").prependTo(".news_pagebox_list");
    $(".news_pagebox_list").css('left','-750px');
    $(".news_pagebox_list").animate({left:0+"px"},1000);
  });


  $(".L_box > ul > li").mouseenter(function(){
    $(this).find("a").addClass("on");
  });
  $(".L_box > ul > li").mouseleave(function(){
    $(this).find("a").removeClass("on");
  });


  $(".news_submenu:first").show();
  $('.L_box ul li').click(function(){
    $(this).find('.news_submenu').stop().slideDown(500);
    $(this).siblings().find('.news_submenu').stop().slideUp(500);
  });



  $(".news_sub_slidelist > .image_div").mouseenter(function(){
    $(this).find("img").css("opacity","1");
  });
  $(".news_sub_slidelist > .image_div").mouseleave(function(){
    $(this).find("img").css("opacity","0.8");
  });

  var j=0;
  setInterval(function(){
    if (j<6) {
      j++;
    } else {
      j=0;
    }
    $(".news_sub_slidelist").animate({left:-250+"px"},1000,function(){
      $(".news_sub_slidelist div:first-child").appendTo(".news_sub_slidelist");//1번 사진을 3번 뒤로 붙이기
      $(".news_sub_slidelist").css('left','');
    });

  },3000);



});
