$(document).ready(function () {

//    var $doc = $(document);
    var $win = $(window);
//    var $docWidth = $doc.width();
//    var $winWidth = $win.width();
//    var $docHeight = $doc.height();
    var $winHeight = $win.height();
    
    $("#site-logo").on("click", function(){
        $("#nav").toggleClass("show");
        return false;
    });
    
    $(".nav-link").on("click", function() {
        var $data = $(this).data("id");
        var $id = "#" + $data + "";
        $("body").animate({ scrollTop: $($id).offset().top - 50 }, 1000);
    });
    
    $(".toggle-form").on("click", function(){
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
        
        setTimeout(function() {
            $("body").addClass("project-show");
        }, 700);
        
        return false;
    });
     $(".project-back").on("click", function(){
        var $content = $(this).parent().parent().parent();
        $($content).removeClass("show");
         
        $("body").removeClass("project-show");
        $("body").animate({ scrollTop: $('#recent-work').offset().top }, 1000);
         
        return false;
    });
    
    $(".project-next").on("click", function(){
        var $num = $(this).parent().parent().parent().parent().data("id");
        var $next = "#project-" + ($num + 1) + "-content";
        $(this).parent().parent().parent().parent().removeClass("show");
        
        if ( $($next).length > 0 ) {
            $($next).addClass("show");
        } else {
            $("body").removeClass("project-show");
            $("body").animate({ scrollTop: $('#recent-work').offset().top }, 1000);
        }
        
        return false;
    });
    $(".project-prev").on("click", function(){
        var $num = $(this).parent().parent().parent().parent().data("id");
        var $prev = "#project-" + ($num - 1) + "-content";
        $(this).parent().parent().parent().parent().removeClass("show");
        
        if ( $($prev).length > 0 ) {
            $($prev).addClass("show");
        } else {
            $("body").removeClass("project-show");
            $("body").animate({ scrollTop: $('#recent-work').offset().top }, 1000);
        }
        
        return false;
    });
    
    $('.owl-carousel').owlCarousel( {
        singleItem: true,
        autoPlay: 6000,
        lazyLoad: true,
    }  
    );
    
    var cardSlider = function(c) {
        var $sWrapper = $(c).children(".slides-wrapper");
        var $slides = $sWrapper.children(".slide");
        var $h = $(".mod-carousel-wrapper").children(".slides-wrapper").children(".slide").height() + "px";
        
        $sWrapper.css("height", $h);
        $slides.attr("style", function(i) {
            
            var z = 20 - i,
                t = (-i * 30) + "px";
            
            var string = "z-index:" + z + "; top:" + t + ";";
            return string;
        });
    };
    cardSlider(".mod-carousel-wrapper");
    
    $(".mod-carousel-wrapper .controls .next").on("click", function() {
        if ( $(".slide:last-child").hasClass("active") ) {
            return false;
        } else {
            $(".slide").each(function() {
                $(this).animate({top: "+=30"}, 300);
            });
            $(".slide").removeClass("second");
            $(".slide").removeClass("third");
            $(".slide.active").removeClass("active").next().addClass("active").removeClass("off");
            $(".slide.active").prev().addClass("off");
            $(".slide.active").next().addClass("second").removeClass("off");
            $(".slide.active").next().next().addClass("third").removeClass("off");

            return false;
        }
    });
    $(".mod-carousel-wrapper .controls .prev").on("click", function() {
        if ( $(".slide:first-child").hasClass("active") ) {
            return false;
        } else {
            $(".slide").removeClass("second");
            $(".slide").removeClass("third");
            $(".slide.active").removeClass("active").prev().addClass("active").removeClass("off");
            $(".slide").each(function() {
                $(this).animate({top: "-=30"}, 300);
            });
            $(".slide.active").prev().addClass("off");
            $(".slide.active").next().addClass("second").removeClass("off");
            $(".slide.active").next().next().addClass("third").removeClass("off");
            return false;
        }
    });
    
    // =====
    // Execute this JS after page content has loaded (images, videos, etc):
    // =====
    $(window).bind("load", function() {

        $(window).resize(function() {
            
//            var $doc = $(document);
//            var $win = $(window);
//            var $docHeight = $doc.height();
//            var $winHeight = $win.height();
//            var $docWidth = $doc.width();
//            var $winWidth = $win.width();
            
        });
    
    });
	
});