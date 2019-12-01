$(document).ready(function(){
    $('#SignInSubmit').click(function () {
        var userId = $("#Id").val();
        var userPassword = $("#Password").val();
        var allData = { email : userId , password : userPassword };
        localStorage.setItem('email',userId);
        localStorage.setItem('password',userPassword);
        location.href = "dashboard.html";
    });
    $('#SignUpSubmit').click(function () {


    });
});
