$(document).ready(function(){
    var scheduleArray = [];
    var userInfo =  getUrlParams();
    console.log(userInfo);


    $('td').click(function () {
        if( this.style.backgroundColor == "rgb(102, 102, 153)"){
            this.style.backgroundColor   = "white";
        }else{
            this.style.backgroundColor  = "rgb(102, 102, 153)";
        }
    }); 
    $('#SignUpComplete').click(function () {
        var scheduleEntry = $('td');
        for(var i= 0; i <scheduleEntry.length ; i++){
            if( scheduleEntry[i].style.backgroundColor == "rgb(102, 102, 153)" ){
                scheduleArray.push($(scheduleEntry[i]).attr("value"));
            }
        }
        var allData = {"email": userInfo.Id, "password":userInfo.Password, "name" : decodeURIComponent(userInfo.Name,"UTF-8"), "organization": decodeURIComponent(userInfo.Organization,"UTF-8"), "schedule" : scheduleArray };
        var tmp = JSON.stringify(allData);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/add_user",
            data: tmp,
            contentType  : "application/json; charset=utf-8",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                location.href="login.html";
                alert("회원가입이 완료되었습니다.");
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
    });
    function getUrlParams() {
        var params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
        return params;
    }
});
