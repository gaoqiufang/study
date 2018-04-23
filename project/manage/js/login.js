define(function(require) {
    var $ = require("jquery");

    function submit() {
        $(".loginClick").on("click",function() {
            $.ajax({
                url: "mock/login.json",
                type: "post",
                data:{
                    username: $(".username").val(),
                    password: $(".password").val()
                },
                success: function(data) {
                    if(data.status == 0) {
                        window.location = "http://www.baidu.com";
                    }else{
                        alert("用户未注册");
                    }
                    
                }
            })
        })
    }

    function start() {
        submit();
    }

    return {
        start
    }
});