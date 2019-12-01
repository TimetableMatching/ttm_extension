$(document).ready(function(){
    var scheduleArray = [];
    var userInfo =  getUrlParams();


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
        var allData = {"email": userInfo.Id, "password":userInfo.Password, "name" : userInfo.Name, "organization":userInfo.Organization, "schedule" : scheduleArray };
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
    function selectSchedule(item,idex){
        
        if( this.style.backgroundColor == "rgb(102, 102, 153)" ){
            scheduleArray.push(item.attr("value"));
        }
        
    }

});
