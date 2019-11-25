$(document).ready(function(){
    $('#SignInSubmit').click(function () {
        var userId = $("#Id").val();
        var userPassword = $("#Password").val();
        var obj = new Object();
        obj.email = "aaa@mmm.mmm";
        obj.password = "1234";
        var allData = { email : userId , password : userPassword };
        
        var tmp = JSON.stringify(allData);
        console.log(tmp);
        $.ajax({
            type:"POST",
            url: "http://13.209.50.215:5000/login",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                location.href="dashboard.html";
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
    });
    $('#SignUpSubmit').click(function () {


    });
});
