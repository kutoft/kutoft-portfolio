$(document).ready(function(){var e=$(document),t=$(window),a=e.height(),o=t.height(),n=e.width(),i=t.width(),s=$("#wrapper").children(".page-wrapper").length,r=$("#home"),c=$("#work"),w=$("#wrapper");w.css("width",100*s+"%"),$(".page-wrapper").css("width",i),c.on("click",function(){var e=t.width();$(".page-wrapper").removeClass("active"),$("#work-content").addClass("active"),w.animate({left:-e}),(new WOW).init();var a=new Blazy({})}),r.on("click",function(){var e=t.width();$(".page-wrapper").removeClass("active"),$("#home-content").addClass("active"),w.animate({left:0}),(new WOW).init()}),$(".toggle-form").on("click",function(){return $(".mod-contact").toggleClass("show"),$(".simform").toggleClass("show"),!1}),$(".final-message").hasClass("show")===!0&&setTimeout(function(){$(".mod-contact").removeClass("show"),$("#theForm").removeClass("show")},2500),$(".project-wrapper").css("top",o+10),$(".project-expand").on("click",function(){var e=$(this).data("id"),t="#"+e+"-content";return $(t).addClass("show"),!1}),$(".project-back").on("click",function(){var e=$(this).parent().parent();return $(e).removeClass("show"),!1}),$(window).bind("load",function(){$(window).resize(function(){var e=$(document),t=$(window),a=e.height(),o=t.height(),n=e.width(),i=t.width();$(".page-wrapper").css("width",i),c.hasClass("active")===!0&&w.css("left",-i)})})});