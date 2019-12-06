$(document).ready(function(){
    beforeSchedule();
    $('td').click(function () {
        if( this.style.backgroundColor == "rgb(102, 102, 153)"){
            this.style.backgroundColor   = "white";
        }else{
            this.style.backgroundColor  = "rgb(102, 102, 153)";
        }
    }); 
    $('#SignUpComplete').click(function () {
        var scheduleArray = [];
        var email = localStorage.getItem("myEmail");
        var scheduleEntry = $('td');
        for(var i= 0; i <scheduleEntry.length ; i++){
            if( scheduleEntry[i].style.backgroundColor == "rgb(102, 102, 153)" ){
                scheduleArray.push($(scheduleEntry[i]).attr("value"));
            }
        }
        
        var allData = {"email": email};
        var tmp = JSON.stringify(allData);
        console.log(tmp);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/delete_schedule",
            data: tmp,
            contentType  : "application/json; charset=utf-8",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    console.log("시간표가 삭제되었습니다.")
                    addSchedule(email,scheduleArray);
                    
                }else{
                    alert("시간표가 삭제되었습니다.");
                }
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
    });
    function addSchedule(email,scheduleArray){
        var allData2 = {"email": email,  "schedule" : scheduleArray };
        var tmp2 = JSON.stringify(allData2);
        console.log(tmp2);
        $.ajax({
            type:"POST",
            url: "http://13.209.43.131:5000/add_schedule",
            data: tmp2,
            contentType  : "application/json; charset=utf-8",
            cache : false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data.status == "1"){
                    alert("시간표 변경 완료");
                    location.href="dashboard.html";
                }else{
                    alert("시간표 변경 실패");
                }
            },error:function(data){
                alert("error");
                console.log(data);
            }
        }); 
    }
    function beforeSchedule(){
        var schedule = localStorage.getItem("myschedule",schedule).split(",");
        
        for(var i = 0 ; i <schedule.length ; i++){
            $('#'+ schedule[i]).css("background-color","rgb(102, 102, 153)" );
        }
    }
});
