$(document).ready(function(){
    $('#SignInSubmit').click(function () {
        var userId = $("#Id").val();
        var userPassword = $("#Password").val();
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
                if(data.status == "1"){
                    location.href="dashboard.html";
                    chrome.storage.sync.set({'dashBoardData': data},function(){});
                }else{
                    alert("로그인에 실패하셨습니다.");
                }
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
    });
    $('#SignUpSubmit').click(function () {


    });
});
