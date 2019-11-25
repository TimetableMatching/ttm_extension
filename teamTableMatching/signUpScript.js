$(document).ready(function(){


    $('#SingInSubmit').click(function () {
        var userId = $("#Id").val();
        var userPassword = $("#Password").val();
        console.log("true");
        var allData = { "id" : userId , "Password" : userPassword };
        // 그 text를 url로 보내고, 평가 항목을 표시하고, 평가를 실시하게 한다.
        $.ajax({
            url:'13.209.50.215:5000/user',
            data: allData,
            dataType:'json',
            type:'POST',
            cache : false,
            processData: false,
            // text를 보내진게 성공을 하게 된다면, 평가 할목을 표시한다.
            success: function (data) {
                console.log("success?");
            }
        });
    });
});
