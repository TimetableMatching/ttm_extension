$(document).ready(function(){

    $('#noticeReg').click(function(){
        var notice = $('#notice').val();
        var teamId = "핸즈온";
        var allData = { 'notice' : notice , 'teamId' : teamId};
        
        var temp = JSON.stringify(allData);
       
        //location.href="login.html?";

        $.ajax({
            type:"POST",
            url: "http://13.209.50.215:5000/----",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    chrome.storage.sync.set({'teamData': data},function(){
                        alert('Success!');
                    });
                    location.href="team.html";

                }else{
                    alert("로그인에 실패하셨습니다.");
                }
               
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
        location.href="login.html?notice=b";
      

    })
});
