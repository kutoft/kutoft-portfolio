$(document).ready(function () {

    var $doc = $(document);
    var $win = $(window);
    var $docHeight = $doc.height();
    var $winHeight = $win.height();
    var $docWidth = $doc.width();
    var $winWidth = $win.width();
    
    var $pages = $("#wrapper").children(".page-wrapper").length;
    var $home = $("#home");
    var $work = $("#work");
    var $wrapper = $("#wrapper");
    
    $wrapper.css("width", ($pages * 100) + "%" );
    $(".page-wrapper").css("width", $winWidth );
    
    $work.on("click", function(){
        var $winWidth = $win.width();
        $(".page-wrapper").removeClass("active");
        $("#work-content").addClass("active");
        $wrapper.animate({left: -$winWidth});
        new WOW().init();
        var bLazy = new Blazy({ 
        });
    });
    $home.on("click", function(){
        var $winWidth = $win.width();
        $(".page-wrapper").removeClass("active");
        $("#home-content").addClass("active");
        $wrapper.animate({left: 0});
        new WOW().init();
    });
//    $("#project-1").on("click", function(){
//        var $winWidth = $win.width();
//        $(".page-wrapper").removeClass("active");
//        $("#project-1-content").addClass("active");
//        $wrapper.animate({left: -($winWidth * 2)});
//    });
//    $("#project-2").on("click", function(){
//        var $winWidth = $win.width();
//        $(".page-wrapper").removeClass("active");
//        $("#project-2-content").addClass("active");
//        $wrapper.animate({left: -($winWidth * 3)});
//    });
//    $("#project-3").on("click", function(){
//        var $winWidth = $win.width();
//        $(".page-wrapper").removeClass("active");
//        $("#project-3-content").addClass("active");
//        $wrapper.animate({left: -($winWidth * 4)});
//    });
//    $("#project-4").on("click", function(){
//        var $winWidth = $win.width();
//        $(".page-wrapper").removeClass("active");
//        $("#project-4-content").addClass("active");
//        $wrapper.animate({left: -($winWidth * 5)});
//    });
//    $(".project-back").on("click", function(){
//        var $winWidth = $win.width();
//        $(".page-wrapper").removeClass("active");
//        $("#work-content").addClass("active");
//        $wrapper.animate({left: -$winWidth});
//    });
    
    
    $(".toggle-form").on("click", function() {
        $(".mod-contact").toggleClass("show");
        $(".simform").toggleClass("show");
        return false;
    });
    
    if ($(".final-message").hasClass("show") === true) {
        setTimeout(function() {
            $(".mod-contact").removeClass("show");
            $("#theForm").removeClass("show");
        }, 2500);
    }
    
    
    $(".project-wrapper").css("top", ($winHeight + 10));
    
    $(".project-expand").on("click", function(){
        var $id = $(this).data("id");
        var $content = "#" + $id + "-content";
        $($content).addClass("show");
        return false;
    });
     $(".project-back").on("click", function(){
         var $content = $(this).parent().parent();
         $($content).removeClass("show");
         return false;
    });
    
    // =====
    // Execute this JS after page content has loaded (images, videos, etc):
    // =====
    $(window).bind("load", function() {

        $(window).resize(function() {
            
            var $doc = $(document);
            var $win = $(window);
            var $docHeight = $doc.height();
            var $winHeight = $win.height();
            var $docWidth = $doc.width();
            var $winWidth = $win.width();
            
        	$(".page-wrapper").css("width", $winWidth );
            
            if ( $work.hasClass("active") === true ) {
                $wrapper.css("left", -$winWidth);
            }
            
        });
    
    });
	
});