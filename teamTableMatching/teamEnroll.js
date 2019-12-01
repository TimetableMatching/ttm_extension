$(document).ready(function(){

    $('#goBeforePage').click(function(){
        window.history.back();
    });


    //팀원 조회허가
    $('#searchMember').click(function(){
        var member_Id = $('#searchMember').val();
        var allData = {member_Id : member_Id};
        var tmp = JSON.stringify(allData);
        // $.ajax({
        //     type:"POST",
        //     url: "http://13.209.43.131:5000/member_search",
        //     data: tmp,
        //     contentType  : "application/json",
        //     cache : false,
        //     processData: false,
        //     success: function (data) {
        //         if(data.status == "1"){
        //             alert("존재하는 사용자 입니다.");
        //         }else{
        //             alert("존재하지 않는 사용자입니다.")
        //         }
        //         console.log(data);
        //     },error:function(data){
        //         alert("error");
        //     }
        // }); 
    });

    //팀원 추가하기
    $('#addMember').click(function(){
        var member_Id = $('#searchMember').val();
        var allData = {member_Id : member_Id};
        var tmp = JSON.stringify(allData);
        var td_listnum = document.getElementsByClassName("autoInc").length+1;
        //$('#newTeamTable').append('<tr><td class="autoInc">'+td_listnum+'</td><td name=td_memberId>'+'11'+'</td><td >'+111+'</td><td >'+1111+'</td></tr>');
        // $.ajax({
        //     type:"POST",
        //     url: "http://13.209.43.131:5000/member_add",
        //     data: tmp,
        //     contentType  : "application/json",
        //     cache : false,
        //     processData: false,
        //     success: function (data) {
        //         if(data.status == "1"){
        //            $('#newTeamTable').append('<tr><td class="autoInc">'+td_listnum+'</td><td name=td_memberId>'+'data.Id'+'</td><td >'+data.Name+'</td><td >'+data.Organization+'</td></tr>');
        //             console.log(data);
        //         }else{
        //             alert("존재하지 않는 사용자입니다.")
        //         }
        //     },error:function(data){
        //         alert("error");
        //     }
        // }); 
    });

    //팀 등록하기
    $('#enrollTeam').click(function(){
        var teamName = $("#teamName").val();
        var teamId = $("#teamId").val();
        var memberIdList = [];
        $('td[name="td_memberId"]').each(function(i){//체크된 리스트 저장
            memberIdList.push($(this).text());
        });
        // console.log(teamName);
        // console.log(teamId);
        // console.log(memberIdList);
        var allData = {teamId : teamId, teamName: teamName, memberList : memberIdList};
        var tmp = JSON.stringify(allData);
        // $.ajax({
        //     type:"POST",
        //     url: "http://13.209.43.131:5000/team_enroll",
        //     data: tmp,
        //     contentType  : "application/json",
        //     cache : false,
        //     processData: false,
        //     success: function (data) {
        //         alert("팀이 등록되었습니다.");
        //         href.location("dashboard.html");
        //     },error:function(data){
        //         alert("error");
        //     }
        // }); 
    });
});