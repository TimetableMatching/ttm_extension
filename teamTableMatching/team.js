$(document).ready(function(){
    var teamId = localStorage.getItem('teamId');
    var allData = { "team_id" : teamId };
    var tmp = JSON.stringify(allData);
    $.ajax({
        type:"POST",
        url: "http://13.209.43.131:5000/read_team",
        data: tmp,
        contentType  : "application/json",
        cache : false,
        processData: false,
        success: function (data) {
            console.log(data);
            var memberList = data.Member;
            var teamId = data.Team_ID;
            var teamName = data.Team_Name
            var notice = data.notice;
            addMemberEntry(memberList)
            searchTeamSchedule(memberList)
            addTeamEntry(teamId,teamName);
            addNoticeListEntry(notice);
        },error:function(data){
            alert("error");
        }
    }); 
    $('#writeNotice').click(function(){
        var teamID 
        location.href = "noticeWrite.html"
    });
    function addMemberEntry(memberList){
        for(var i = 0 ; i<memberList.length ; i++){

            console.log(memberList[i].Email);
          $('#MemberList').append('<tr id = "MemberEntry"><td >'+ i +'</td><td >'+ memberList[i].Email +'</td><td >'+memberList[i].Name+'</td><td >'+memberList[i].Organization+'</td><td><input type="checkbox" value="true"><br></td></tr>');
        }
    }
    function addNoticeListEntry(notice){
        for(var i = 0; i < notice.length ;i++){
            $('#NoticeList').append(' <tr class= "NoticeEntry"><td >'+i+'</td><td >'+notice[i].Text+'</td><td >'+notice[i].author+'</td><td >'+notice[i].Date+'</td></tr>') 
        }
    }
    function addTeamEntry(teamId,teamName){
        $('#TeamId').after('<td>'+teamId+'</td>');
        $('#TeamName').after('<td >'+teamName+'</td>');
    }
    function searchTeamSchedule(memberList){
        for(var i = 0 ; i < memberList.length ; i++){
            var member = memberList[i];
            for(var j = 0 ; j < member.Schedule.length; j++){
                console.log(member.Schedule[j]);
                if($('#'+ member.Schedule[j]).css("background-color") == "rgba(0, 0, 0, 0)"){
                    $('#'+ member.Schedule[j]).css("background-color","rgb(102, 102, 153)");
                }else{
                    $('#'+ member.Schedule[j]).css("background-color","rgb(102, 102, 153)" );
                }
            }
        }
    }
    $('#goBeforePage').click(function(){
        location.href = "dashboard.html";
    });
});