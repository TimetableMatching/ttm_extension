$(document).ready(function(){
    $.ajax({
        type:"POST",
        url: "http://13.209.43.131:5000/get_max_team_id",
        data: "",
        contentType  : "application/json",
        cache : false,
        processData: false,
        success: function (data) {
            console.log(data);
            if(data.status == "1"){
            
                $('#teamId').val(data.team_id);
            }
        },error:function(data){
            alert("error");
        }
    }); 
    $('#goBeforePage').click(function(){
        window.history.back();
    });


    //팀원 조회허가
    $('#searchMember').click(function(){
        var email= $('#memberId').val();
        console.log(email);
        var allData = { "email" : email};
        var tmp = JSON.stringify(allData);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/member_search",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.is_exist == "1"){
                    alert("존재하는 사용자 입니다.");
                    localStorage.setItem("tmpMember",email);
                }else{
                    alert("존재하지 않는 사용자입니다.")
                }
            },error:function(data){
                alert("error");
            }
        }); 
    });

    //팀원 추가하기
    $('#addMember').click(function(){
        var email = $('#memberId').val();
        if(localStorage.getItem("tmpMember") == email){
            var allData = { "email" : email };
            var tmp = JSON.stringify(allData);
            var td_listnum = document.getElementsByClassName("autoInc").length+1;
            $.ajax({
                type:"POST",
                url: "http://13.209.43.131:5000/read_member",
                data: tmp,
                contentType  : "application/json",
                cache : false,
                processData: false,
                success: function (data) {
                      $('#newTeamTable').append('<tr><td class="autoInc">'+td_listnum+'</td><td name=td_memberId>'+email+'</td><td >'+data.Name+'</td><td >'+data.Organization+'</td></tr>');
                    console.log(data);
                },error:function(data){
                    alert("error");
                }
            }); 
        }else{
            alert("조회하지 않은 아이디입니다.! 조회후 추가해주세요");  
        }
    });

    //팀 등록하기
    $('#enrollTeam').click(function(){
        var teamName = $("#teamName").val();
        var teamId = $("#teamId").val();
        var leaderEmail = localStorage.getItem('myEmail');
        var memberIdList = [leaderEmail,];
        $('td[name="td_memberId"]').each(function(i){//체크된 리스트 저장
            memberIdList.push($(this).text());
        });
        var allData = { "team_id" : teamId, "team_name": teamName, "member_list" : memberIdList, "leader_email" : leaderEmail };
        var tmp = JSON.stringify(allData);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/team_enroll",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    alert("팀이 등록되었습니다.");
                    location.href  ="dashboard.html";
                }
            },error:function(data){
                alert("error");
            }
        }); 
    });
});