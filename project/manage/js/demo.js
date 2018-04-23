define(function(require) {
    var $ = require("jquery");

    // function asideClick() {
    //     var divClick = $(".aside .firstMenu");
    //     divClick.on("click",function() {
    //         var clickObj = $(this);
    //         if(clickObj.siblings("ul").is(":hidden")){
    //             clickObj.siblings("ul").show();
    //         }else {
    //             clickObj.siblings("ul").hide();
    //         }
    //     })
    // }

    function asideClick() {
        $('#aside .firstMenu').on('click', function() {
            var $self = $(this);
            var $parent = $self.closest('.item');
            $parent.siblings('.item').removeClass('active');//点击其他的，另一个二级菜单会隐藏
            if ($parent.hasClass('active')) {
                $parent.removeClass('active');
            } else {
                $parent.addClass('active');
            }
        })
    }

    function aside_shink() {
        $("#shink_closed").on("click",function() {
            var $aside = $("#aside");
            var $content = $("#content");
            var $header = $("#header");
            if($aside.hasClass('shink')) {
                $aside.removeClass('shink');
                $content.removeClass('shink');
                $header.removeClass('shink');
            } else {
                $aside.addClass('shink');
                $content.addClass('shink');
                $header.addClass('shink');
            }
        })
    }
    function start() {
        asideClick();
        aside_shink();
    }
    return {
        start
    }
})