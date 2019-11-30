$(document).ready(function(){
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
