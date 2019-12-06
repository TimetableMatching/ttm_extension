$(document).ready(function(){
    addPreholder();
    addTeamEntry();
    $('#noticeReg').click(function(){
        var notice = $('#notice').val();
        var teamId = localStorage.getItem('teamId');
        var author = localStorage.getItem('myName');
        var allData = { 'notice' : notice , 'team_id' : teamId , 'author' : author};
        
        var tmp = JSON.stringify(allData);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/add_notice",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    alert("공지사항이 등록되셨습니다.");
                    location.href = "team.html";
                }
            },error:function(data){
                alert("error");
                console.log(data);
            }
        });     
    })
    function addTeamEntry(){
        $('#TeamId').after('<td>'+localStorage.getItem('teamId')+'</td>');
        $('#TeamName').after('<td >'+localStorage.getItem('teamName')+'</td>');
    }
    function addPreholder(){
        var notice = localStorage.getItem("notice");
        console.log(notice);
        $("#notice").attr("placeholder",notice);
    }
    $('#GoBackBtn').click(function(){
        window.history.back();
    });
    $('#noticeUpdate').click(function(){
        var notice = $('#notice').val();
        var notice_id = localStorage.getItem("noticeId");
        var allData = { 'text' : notice , 'notice_id' : notice_id};
        var tmp = JSON.stringify(allData);
        console.log(tmp);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/update_notice",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    alert("공지사항이 수정되었습니다.");
                    location.href = "team.html";
                }
            },error:function(data){
                alert("error");
                console.log(data);
            }
        });     
    });
    $('#noticeDelete').click(function(){
        var notice_id = localStorage.getItem("noticeId");
        var allData = { 'notice_id' : notice_id};
        var tmp = JSON.stringify(allData);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/delete_notice",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    alert("공지사항이 삭제되었습니다..");
                    location.href = "team.html";
                }
            },error:function(data){
                alert("error");
                console.log(data);
            }
        });     
    });
});
