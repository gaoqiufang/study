$(".loginClick").on("click",function() {
    $.ajax({
        url: "",
        type: "post",
        data:{
            username: $(".username").val(),
            password: $(".password").val()
        },
        success: function(data) {
            if(_data) {
                window.location.herf = "index.html";
            }else{
                alert("用户未注册");
            }
            
        }
    })
})