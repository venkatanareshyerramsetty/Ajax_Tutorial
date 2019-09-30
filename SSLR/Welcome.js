$(document).ready(function(){
	usergetDetailsService();
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
function usergetDetailsService(){

    var usersession = sessionStorage.getItem('userArray');
    console.log("session"+usersession);
    var passwordsession = sessionStorage.getItem('passArray');
    
    if(sessionStorage.getItem('userArray')){

        
    }

    else{
        
        location.replace("Login_LandServey.html");
    }
	
 $.ajax({url: "https://bhunaksha.ap.gov.in/REST/getTaluk_District_Village/'"+usersession+"'/'"+passwordsession+"'", success: function(data){
		  
	//console.log(data);

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
		 
		 
		for(var i= 0, l = result.length; i<l; i++){
			
			
				villagesNames.push(result[i][3]);
				
			
		}

        console.log(user_name);
        

        $('#name').append(user_name);

	  
}});






};



function sessionStorageClear(){

    sessionStorage.clear();

    location.replace("Login_LandServey.html");
}
