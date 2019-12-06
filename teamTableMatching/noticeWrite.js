$(document).ready(function(){

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
    $('#GoBackBtn').click(function(){
        window.history.back();
    });
    
});
