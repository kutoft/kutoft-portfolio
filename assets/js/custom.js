$(document).ready(function () {

    var $doc = $(document);
    var $win = $(window);
    var $docHeight = $doc.height();
    var $winHeight = $win.height();
    var $docWidth = $doc.width();
    var $winWidth = $win.width();
    
    $("#site-logo").on("click", function(){
        $("#nav").toggleClass("show");
        return false;
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
            
        });
    
    });
	
});