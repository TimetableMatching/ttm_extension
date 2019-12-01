$(document).ready(function(){
    var dashBoardData; 
    chrome.storage.sync.get('dashBoardData',function(data){
        dashBoardData = data;
        console.log(dashBoardData);
    });
    $('#withdrawal').click(function(){
        alert("회원 탈퇴 되셨습니다.");
        location.href="login.html";
    });

    $('#dTeamManage').click(function(){
        location.href="teamManage.html";
    });
    $('td').click(function(){
        var tr = $(this).closest('tr');
        if(tr[0].getAttribute("id") == 'teamEntry'){
            location.href = "team.html"
        }
    })
});
