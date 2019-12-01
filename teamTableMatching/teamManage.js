$(document).ready(function(){
    var team = localStorage.getItem('team');


    ////////////////활성화시킬부분///////////////////
    //페이지 진입 시 team 데이터 받아와서 select 옵션 생성
    // for(var i = 0; i < team.length; i++){
    //     $("#steamSelect").append(new Option(team[i].Team_Name, team[i].Team_ID));
    // } 
    ////////////////활성화시킬부분///////////////////



    // oteamName = "test";
    // oteamId = "2111";
    // $("#steamSelect").append(new Option(oteamName, oteamId));

    $('#teamEnroll').click(function(){
        location.href="teamEnroll.html";
    });

    $('#teamDelete').click(function(){
        var teamId = $("#steamSelect option:selected").val();
        //console.log(teamId)
        var allData = { teamId : teamId };
        var tmp = JSON.stringify(allData);
        // $.ajax({
        //     type:"POST",
        //     url: "http://13.209.43.131:5000/team_delete",
        //     data: tmp,
        //     contentType  : "application/json",
        //     cache : false,
        //     processData: false,
        //     success: function (data) {
        //         if(data.status == "1"){
        //             alert("팀이 삭제되었습니다.")
        //         }
        //     },error:function(data){
        //         alert("error");
        //     }
        // }); 
    });
    $('#goBeforePage').click(function(){
        window.history.back();
    });
});
