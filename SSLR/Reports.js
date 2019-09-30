
$(document).ready(function(){
    
    usergetDetailsService();
    countNature_Of_work_Service();
    disableBackButton();
    //alert(user_id);
   
});




var result=[];
var taluk_name='';
var district='';
var villagesNames=[];
var villages=[];
var role_id='';
var  user_id=[];
var user_name=[];
var user_role=[];
var user_uname=[];
var nature_of_work=[];
var userID='';

function usergetDetailsService(){

	var usersession = sessionStorage.getItem('userArray');
	var passwordsession = sessionStorage.getItem('passArray');
    userID = sessionStorage.getItem('userID');
	if(sessionStorage.getItem('userArray')){

        
    }

    else{
        
        location.replace("Login_LandServey.html");
    }
	
 $.ajax({url: "https://bhunaksha.ap.gov.in/REST/getTaluk_District_Village/'"+usersession+"'/'"+passwordsession+"'", success: function(data){
		  
	console.log(data);

	for(i in data){
			result.push(data[i]);
		}

		if(result.length==0){

		   alert("Somthing went rong please try again")
        }
        
        

		 taluk_name=result[1][1];

		 district =result[1][2];
		 role_id=result[1][4].roleid;
         user_id=result[1][0].user_id;
         
		 user_name=result[1][0].user_name;
		 user_role =result[1][4].rolename;
		 user_uname = result[1][0].uname;

		   
}});


};






var resultData =[];
var filteredData =[];
var resultKeys =[];
var myArrayNew  =[];
function viewReportsByNatureOfWork(){

    var natureOfWork =parseInt($('.select_option').val());

    alert(user_id);
    
    $.ajax({url: "https://bhunaksha.ap.gov.in/REST/getNatureOfWorkByUser_Id/"+natureOfWork+"/'"+user_id+"'", success: function(data){
		  
        //console.log(data);
    
        for(i in data){
                resultData.push(data[i]);
            }
    
            console.log(resultData);
            
            if(resultData.length==0){
    
               alert("Record not found Check it once")
            }


            filteredData = resultData[0];
            
            console.log('filtered'+filteredData);


            //var myArrayNew = filteredData.filter(function (el) {
               // return el != null && el != "";
              //});
    
               //myArrayNew = filteredData.filter(function(val){if(val)return val}).join(", ");
    
        
    
          //console.log('new'+myArrayNew);

  
        
            //for getting the keys from resultData array values
            for (var i = 0; i < resultData.length; i++) {



                resultKeys = Object.keys(resultData[i]);  
                

            }




            

           console.log('resultKys'+resultKeys);



var html = "<table border='1|1' class='table-responsive'>";


for (var i = 0; i < resultKeys.length; i++) {

html+="<th>"+resultKeys[i]+"</th>";

}


for (var i = 0; i < resultData.length; i++) {
    
    html+="<tr>";

    html+="<td>"+resultData[i].date_time+"</td>";
    html+="<td>"+resultData[i].ro_id+"</td>";
    html+="<td>"+resultData[i].user_id+"</td>";
    html+="<td>"+resultData[i].user_name+"</td>";
    html+="<td>"+resultData[i].user_role+"</td>";
    html+="<td>"+resultData[i].dist_code+"</td>";
    html+="<td>"+resultData[i].taluk_code+"</td>";
    html+="<td>"+resultData[i].vill_code+"</td>";
    html+="<td>"+resultData[i].survey_no+"</td>";
    html+="<td>"+resultData[i].file_no+"</td>";
    html+="<td>"+resultData[i].nature_of_work+"</td>";
    html+="<td>"+resultData[i].application_no+"</td>";
    html+="<td>"+resultData[i].area_extent+"</td>";
    html+="<td>"+resultData[i].no_of_subdivisions+"</td>";
    html+="<td>"+resultData[i].no_of_plots+"</td>";
    html+="<td>"+resultData[i].user_leaves+"</td>";
    html+="<td>"+resultData[i].no_of_errors+"</td>";
    html+="<td>"+resultData[i].user_holidays+"</td>";
    html+="<td>"+resultData[i].meeting_name+"</td>";
    html+="<td>"+resultData[i].meeting_place+"</td>";
    html+="<td>"+resultData[i].meeting_myrole+"</td>";

    html+="<td>"+resultData[i].no_of_fmbs+"</td>";
    html+="<td>"+resultData[i].name_of_the_project+"</td>";
    html+="<td>"+resultData[i].designation_of_officers+"</td>";
    html+="<td>"+resultData[i].othersfield+"</td>";
    html+="<td>"+resultData[i].remarks+"</td>";
    html+="<td>"+resultData[i].uname+"</td>";



    html+="</tr>";

    }

html+="</table>";
document.getElementById("report_table").innerHTML = html;

 
   
            
    }});

    resultData =[];
  
    
    
}







function sessionStorageClear(){

    sessionStorage.clear();

    location.replace("Login_LandServey.html");
}





function buttonCreation(){
    buttonCreation = function(){};  //kill it as soon as it was called
    var button= $('<button type="submit" id="download_button" class="btn btn-primary" onclick="Export()">Download</button>');
    $("#download_button").append(button);

}



function Export() {
    $("#report_table").table2excel({
        filename: "Table.xls"
    });
}


function disableBackButton()
{
window.history.forward();
}

var count =[];
var countFilter=[];
var countValue =[];

function countNature_Of_work_Service(){

     
    //alert(userID);
	


    $.ajax({url: "https://bhunaksha.ap.gov.in/REST/getCountOfNatureOfWork/'"+userID+"'", success: function(data){
		  
        //console.log(data);
    
        for(i in data){
                count.push(data[i]);
            }


           

            //console.log("count"+count);

            for(var i=0; i<count.length; i++){

                

                    countFilter.push(count[i][0]);
                    countValue.push(count[i][1]);
               

            
            }
                var html = "<table border='1|1' class='table-responsive'>";


               

                    html+="<th>Nature Of Work</th>";
                    html+="<th>Count</th>";
                    
                    
                    for (var i = 0; i < countFilter.length; i++) {
    
                        html+="<tr>";
                    
                        html+="<td>"+countFilter[i]+"</td>";
                        html+="<td>"+countValue[i]+"</td>";

                        html+="</tr>";

                    }
                
                html+="</table>";
            document.getElementById("count_table").innerHTML = html;  


               
               //console.log();

            

            


        }});

}