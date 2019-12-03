$(document).ready(function(){

    var email = localStorage.getItem('myEmail');
    var allData = { "email" : email };
    var tmp = JSON.stringify(allData);
    $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/team_manage",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    var teamList = data.Team;
                    addTeamList(teamList);
                }
            },error:function(data){
                alert("error");
            }
        }); 


    function addTeamList(teamList){
        for(var i = 0; i < teamList.length; i++){
            $("#steamSelect").append('<option value =' +teamList[i].Team_ID+'>' + teamList[i].Team_Name + '</option>');

        } 
    }

    $('#teamEnroll').click(function(){
        location.href="teamEnroll.html";
    });

    $('#teamDelete').click(function(){
        var teamId = $("#steamSelect option:selected").attr( 'value' );
        var leader_email = localStorage.getItem('myEmail');
        var allData = { "team_id" : teamId ,"leader_email" : leader_email};
        var tmp = JSON.stringify(allData);
        console.log(tmp);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/team_delete",
            data: tmp,
            contentType  : "application/json",
            cache : false,
            processData: false,
            success: function (data) {
                if(data.status == "1"){
                    alert("팀이 삭제되었습니다.")
                    $("#steamSelect option:selected").remove();
                }else{
                    alert(data.error);
                }
            },error:function(data){
                alert("error");
            }
        }); 
    });
    $('#goBeforePage').click(function(){
        window.history.back();
    });
});
