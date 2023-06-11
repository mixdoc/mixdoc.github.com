(function ($) {
    $(document).ready(function () {

        var animateSpeed = 500;

        $(".icon-go-top").css("visibility","hidden")
        $(".icon-go-bottom").css("visibility","visible")

        if (window.location.pathname == "/") {
            $(".icon-go-index").css("visibility","hidden")
        } else {
            $(".icon-go-index").css("visibility","visible")
        }

        $(window).scroll(function () {
            var scrollTop = $(document).scrollTop();

            if (scrollTop > document.documentElement.clientHeight * 0.2) {
                $(".icon-go-top").stop().fadeTo(300, 1);
                $(".icon-go-top").css("visibility","visible")
            } else {
                $(".icon-go-top").stop().fadeTo(300, 0);
                $(".icon-go-top").css("visibility","hidden")
            }

            if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight * 1.2) {
                $(".icon-go-bottom").stop().fadeTo(300, 1);
                $(".icon-go-bottom").css("visibility","visible")
            } else {
                $(".icon-go-bottom").stop().fadeTo(300, 0);
                $(".icon-go-bottom").css("visibility","hidden")
            }
        });

        $(".icon-go-top").click(function () {
            $('html, body').animate({ scrollTop: 0 }, animateSpeed); return false;
        });

        $(".icon-go-bottom").click(function () {
            $('html, body').animate({ scrollTop: document.documentElement.scrollHeight }, animateSpeed); return false;
        });

        $(".icon-go-index").click(function () {
            window.location = "/";
        });

        $(".icon-refresh").click(function () {
            window.location.reload();
        });
        
    })
})(jQuery)
