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

  $(".seoul_taps > li:first").addClass("active");
  $(".seoul_taps_block div").hide();
  $(".seoul_taps_block div:first").show();
  $(".seoul_taps li").click(function(){
    $(".seoul_taps_block div").hide();
    $(".seoul_taps li").removeClass("active");
    $(this).addClass("active");
    var s = $(this).find("a").attr("href");
    $(s).show();
    return false;
  });

  $(".subnav > li").click(function(){
    $(this).find(".Sensub").stop().slideDown(500);
    $(this).siblings().find(".Sensub").stop().slideUp(500);
    $(this).find("a:first").addClass("active");
    $(this).siblings().find("a:first").removeClass("active");
  });
  $(".Sensub:first").show();
  $(".subnav > li:first").find("a:first").addClass("active");
  $(".Sensub > li").eq(1).find("a").addClass("on");
  $(".Sensub > li").click(function(){
    $(".imgimg").hide();
    $(this).find("a").addClass("on");
    $(this).siblings().find("a").removeClass("on");
    var s = $(this).find("a").attr("href");
    $(s).show();
    return false;
  });
});
