$(document).ready(function(){
    //회원가입 버튼 클릭 시
    $('#SignUpSubmit').click(function(){
        console.log("hi");
        var userId = $("#Id").val();
        var userPassword = $("#Password").val();
        var userOrganization = $("#Organization").val();
        var userName = $("#Name").val();
        
        var allData = {"email":userId, "password":userPassword, "name" : userName, "organization":userOrganization};
        var tmp = JSON.stringify(allData);
        console.log(tmp);
        $.ajax({
            type:"POST",
            url: "http://13.209.50.215:5000/add_user",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                location.href="scheduleReg.html";
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
        
        //alert("회원가입이 완료되었습니다.")
        console.log(allData);
    });

    //뒤로가기 버튼 클릭 시
    $('#GoBackBtn').click(function(){
        window.history.back();
    });
});