$(document).foundation();

$(document).ready(function () {

//    var $doc = $(document);
    var $win = $(window);
//    var $docWidth = $doc.width();
//    var $winWidth = $win.width();
//    var $docHeight = $doc.height();
    var $winHeight = $win.height();

    $("#menu-toggle").on("click", function(){
        $("#menu").toggleClass("open");
        return false;
    });
    $("#nav li a").on("click", function(){
        $("#menu").removeClass("open");
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

    $("#theForm .controls .next").on("click", function(){
        if($("#theForm .questions li:last-child").hasClass("current")) {
            $("#theForm .submit").click();
        }
    });

    $('.owl-carousel').owlCarousel( {
        singleItem: true,
        autoPlay: 12000,
        lazyLoad: true,
    }
    );

    // =====
    // Execute this JS after page content has loaded (images, videos, etc):
    // =====
    $(window).bind("load", function() {

        // init Isotope
        var $portfolio = $('#portfolio').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
            transitionDuration: '0.8s'
        });
        // filter items on button click
        $('.filter-select-group').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $portfolio.isotope({ filter: filterValue });
          return false;
        });

        $("#select-wrapper .select-options li").on("click", function(){
            var filterOption = $(this).attr("data-option");
            $("#select-wrapper .select-placeholder").html(filterOption);
            $("#select-wrapper").removeClass("open");
        });

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
