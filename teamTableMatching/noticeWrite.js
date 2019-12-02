$(document).ready(function(){

    addTeamEntry();
    $('#noticeReg').click(function(){
        var notice = $('#notice').val();
        var teamId = "핸즈온";
        var allData = { 'notice' : notice , 'teamId' : teamId};
        
        var temp = JSON.stringify(allData);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/add_notice",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
        location.href="login.html?notice=b";
    
    })
    function addTeamEntry(){
        $('#TeamId').after('<td>'+localStorage.getItem('teamId')+'</td>');
        $('#TeamName').after('<td >'+localStorage.getItem('teamName')+'</td>');
    }
});
