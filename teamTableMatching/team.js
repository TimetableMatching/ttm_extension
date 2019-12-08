$(document).ready(function(){

    var ColorList;
    var teamId = localStorage.getItem('teamId');
    var allData = { "team_id" : teamId };
    var tmp = JSON.stringify(allData);
    var memberList;
    console.log(tmp);
    $.ajax({
        type:"POST",
        url: "http://13.209.43.131:5000/read_team",
        data: tmp,
        contentType  : "application/json",
        cache : false,
        processData: false,
        success: function (data) {
            console.log(data); 
            memberList = data.Member;
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
        location.href = "noticeWrite.html"
    });
    function addMemberEntry(memberList){
        for(var i = 0 ; i<memberList.length ; i++){
          $('#MemberList').append('<tr class = "MemberEntry"><td >'+ i +'</td><td >'+ memberList[i].Email +'</td><td >'+memberList[i].Name+'</td><td >'+memberList[i].Organization+'</td><td><input type="checkbox" id = "'+memberList[i].Email +'"><br></td></tr>');
        }
    }
    function addNoticeListEntry(notice){
        for(var i = 0; i < notice.length ;i++){
            $('#NoticeList').append(' <tr class= "NoticeEntry" value ="'+notice[i].notice_id+'"><td >'+i+'</td><td >'+notice[i].Text+'</td><td >'+notice[i].author+'</td><td >'+notice[i].Date+'</td></tr>') 
        }
        for(var j = 0; j < teamId.length ; j++){
            console.log("teamId");
        }
    }
    function addTeamEntry(teamId,teamName){
        var team = localStorage.getItem('teamName');
        $('#TeamId').after('<td>'+teamId+'</td>');
        $('#TeamName').after('<td >'+ team+'</td>');
    }
    function searchTeamSchedule(memberList){
        for(var i = 0 ; i < memberList.length ; i++){
            var member = memberList[i];
            for(var j = 0 ; j < member.Schedule.length; j++){
                if($('#'+ member.Schedule[j]).css("background-color") == "rgba(0, 0, 0, 0)"){
                    $('#'+ member.Schedule[j]).css("background-color","rgb(102, 102, 153, 0.2)");
                }else{
                    $('#'+ member.Schedule[j]).css("background-color","rgb(102, 102, 153)" );
                }
            }
        }
    }
    $('#aginReadschedule').click(function(){
        $('#dSchedule td').css("background-color","rgba(0, 0, 0, 0)");

        for(var i = 0 ; i < memberList.length ; i++){
            var member = memberList[i];
            var checkbox =  document.getElementById(memberList[i].Email);
            console.log(checkbox);
            if(checkbox.checked == true){
                for(var j = 0 ; j < member.Schedule.length; j++){
                    if($('#'+ member.Schedule[j]).css("background-color") == "rgba(0, 0, 0, 0)"){
                        $('#'+ member.Schedule[j]).css("background-color","rgb(102, 102, 153, 0.2)");
                    }else{
                        $('#'+ member.Schedule[j]).css("background-color","rgb(102, 102, 153)" );
                    }
                }
            }
        }
        console.log(checkbox.checked);
    });
    
    $('#goBeforePage').click(function(){
        location.href = "dashboard.html";
    });
    $(document).on("click", ".NoticeEntry", function () {
        var notice = this.children[1].innerText
        var userName = localStorage.getItem("myName");
        var authorName = this.children[2].innerText
        if(userName == authorName){
            var noticeId= $(this).attr("value");
            localStorage.setItem("noticeId",noticeId);
            localStorage.setItem("notice",notice);
            location.href = "noticeUpdate.html";     
        }else{
            alert("작성자가 아닙니다.");
        }
    });
});