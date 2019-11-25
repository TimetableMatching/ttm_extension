$(document).ready(function(){
    var scheduleArray = [];
    $('td').click(function () {
        if( this.style.backgroundColor == "rgb(102, 102, 153)"){
            this.style.backgroundColor   = "white";
            scheduleArray.forEach(removeValue);
            

        }else{
            this.style.backgroundColor  = "rgb(102, 102, 153)";
            scheduleArray.push($(this).attr("value"))
        }
        console.log(scheduleArray);
    }); 
    $('#SignUpComplete').click(function () {
        location.href = "login.html";
        
        //디비에 연동해서 회원가입정보, 시간표 넣으면됨
    });
    function removeValue(value, index, array) {
        if($(this).attr("value") == value){
            
        }
      }
});
