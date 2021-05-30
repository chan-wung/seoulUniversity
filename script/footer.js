$(function(){
  $(".block div").hide();
  $(".block div:first").show();
  $(".quick_menu2_2 li:first").addClass("mapActive");
  $(".quick_menu2_2 li").click(function(){
    $(".quick_menu2_2 li").removeClass("mapActive");
    $(".block div").hide();
    $(this).addClass("mapActive");
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });
  $(".map_box").click(function(){
    $(".quick_menu").hide();
    $(".quick_menu2_2").show();
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });
  $(".phone_box").click(function(){
    $(".quick_menu").hide();
    $(".quick_menu3").show();
    return false;
  });
  $(".wifi_box").click(function(){
    $(".quick_menu").hide();
    $(".quick_menu4").show();
    return false;
  });
  $(".gold_box").click(function(){
    $(".quick_menu").hide();
    $(".quick_menu5").show();
    return false;
  });
  $(".bus_box").click(function(){
    $(".quick_menu").hide();
    $(".quick_menu6").show();
    return false;
  });
  $(".food_box").click(function(){
    $(".quick_menu").hide();
    $(".quick_menu7").show();
    return false;
  });
  $(".map_box > .mp").mouseenter(function(){
    var srcVal = $(".map_box img").attr("src");
    $(".map_box img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".map_box > .mp").mouseleave(function(){
    var srcVal = $(".map_box img").attr("src");
    $(".map_box img").attr({"src":srcVal.replace("2.png","1.png")});
  });
  $(".bus_box > .mp").mouseenter(function(){
    var srcVal = $(".bus_box img").attr("src");
    $(".bus_box img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".bus_box > .mp").mouseleave(function(){
    var srcVal = $(".bus_box img").attr("src");
    $(".bus_box img").attr({"src":srcVal.replace("2.png","1.png")});
  });
  $(".phone_box > .mp").mouseenter(function(){
    var srcVal = $(".phone_box img").attr("src");
    $(".phone_box img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".phone_box > .mp").mouseleave(function(){
    var srcVal = $(".phone_box img").attr("src");
    $(".phone_box img").attr({"src":srcVal.replace("2.png","1.png")});
  });
  $(".food_box > .mp").mouseenter(function(){
    var srcVal = $(".food_box img").attr("src");
    $(".food_box img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".food_box > .mp").mouseleave(function(){
    var srcVal = $(".food_box img").attr("src");
    $(".food_box img").attr({"src":srcVal.replace("2.png","1.png")});
  });
  $(".wifi_box > .mp").mouseenter(function(){
    var srcVal = $(".wifi_box img").attr("src");
    $(".wifi_box img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".wifi_box > .mp").mouseleave(function(){
    var srcVal = $(".wifi_box img").attr("src");
    $(".wifi_box img").attr({"src":srcVal.replace("2.png","1.png")});
  });
  $(".gold_box > .mp").mouseenter(function(){
    var srcVal = $(".gold_box img").attr("src");
    $(".gold_box img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".gold_box > .mp").mouseleave(function(){
    var srcVal = $(".gold_box img").attr("src");
    $(".gold_box img").attr({"src":srcVal.replace("2.png","1.png")});
  });

  $(".close").click(function(){
    $(".quick_menu2_2").hide();
    $(".quick_menu2").hide();
    $(".quick_menu").show();
  });
  $(".close2").click(function(){
    $(".quick_menu3").hide();
    $(".quick_menu").show();
  });
  $(".close3").click(function(){
    $(".quick_menu4").hide();
    $(".quick_menu").show();
  });
  $(".close4").click(function(){
    $(".quick_menu5").hide();
    $(".quick_menu6").hide();
    $(".quick_menu7").hide();
    $(".quick_menu").show();
  });

  $(".busblock > div").hide();
  $(".busblock > .bus1").show();
  $(".bustap_menu li:first").addClass("bustapActive");
  $(".bustap_menu li").click(function(){
    $(".bustap_menu li").removeClass("bustapActive");
    $(".busblock > div").hide();
    $(this).addClass("bustapActive");
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });

  $(".foodblock > div").hide();
  $(".foodblock > .morning").show();
  $(".foodtap li:first").addClass("bustapActive");
  $(".foodtap li").click(function(){
    $(".foodtap li").removeClass("bustapActive");
    $(".foodblock > div").hide();
    $(this).addClass("bustapActive");
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });
});
