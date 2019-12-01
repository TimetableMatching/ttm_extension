$(document).ready(function(){
    var userId = localStorage.getItem('email');
    var userPassword = localStorage.getItem('password');
    localStorage.removeItem('password');
    var allData = { email : userId , password : userPassword };
    var tmp = JSON.stringify(allData);
    $.ajax({
        type:"POST",
        url: "http://13.209.43.131:5000/login",
        data: tmp,
        contentType  : "application/json",
        cache : false,
        processData: false,
        success: function (data) {
            console.log(data);
            if(data.status == "1"){
                console.log(data);
                var team= data.Team;
                var user = data.User;
                var notice = data.Notice;
                var schedule = data.User.Schedule;


                addTeamListEntry(team);
                addNoticeListEntry(notice,team);
                addUserEntry(user);
                UpdateSchedule(schedule);       
            }else{
                alert("로그인에 실패하셨습니다.");
            }
        },error:function(data){
            alert("error");
        }
    }); 

    $('#withdrawal').click(function(){
        alert("회원 탈퇴 되셨습니다.");
        location.href="login.html";
        
    });

    $('#dTeamManage').click(function(){
        location.href="teamManage.html";
    });
    $(document).on("click",'td',function(){
        var tr = $(this).closest('tr');
        if(tr[0].getAttribute("class") == 'teamEntry'){
            console.log(tr[0].children[3].innerText);
            localStorage.setItem('teamId',tr[0].children[3].innerText);
            location.href = "team.html"
        }
    });
    $('.teamEntry').click(function(){
        console.log(this);
    })
    function addTeamListEntry(team){
        for(var i = 0; i < team.length ;i++){
            $('#TeamList').append(' <tr class= "teamEntry"><td >'+i+'</td><td >'+team[i].Team_Name+'</a></td><td >'+team[i].MemberNum+'</td><td >'+team[i].Team_ID+'</td></tr>') 
        }
    }
    function addNoticeListEntry(notice,team){
        for(var i = 0; i < notice.length ;i++){
            var teamName = "";
            for(var j =0 ;j<team.length ; j++){
                if(team[j].Team_ID == notice[i].Team_id){
                    teamName = team[j].Team_Name;
                }
            }
            $('#NoticeList').append(' <tr class= "NoticeEntry"><td >'+i+'</td><td >'+notice[i].Text+'</td><td >'+teamName+'</td><td >'+notice[i].Date+'</td></tr>') 
        }
    }
    function addUserEntry(user){
        $('#UserId').after('<td>'+user.Email+'</td>');
        $('#Organization').after('<td >'+user.Organization+'</td>');
        $('#UserName').after('<td >'+user.Name+'</td>');
    }
    function UpdateSchedule(schedule){
        localStorage.setItem("Myschedule",schedule);
        for(var i = 0 ; i <schedule.length ; i++){
            $('#'+ schedule[i]).css("background-color","rgb(102, 102, 153)" );
        }
    }
});
