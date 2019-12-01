$(document).ready(function(){
    var teamId = localStorage.getItem('teamId');
    var allData = { teamId : teamId };
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
        },error:function(data){
            alert("error");
        }
    }); 
    $('#writeNotice').click(function(){
        var teamID 
        location.href = "notice.html"

    });
});