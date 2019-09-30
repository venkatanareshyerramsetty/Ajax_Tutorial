var selectcase=1;
var tblcount=0;
var dataarray=[];
var saveworkarray=[];
var loginarray=[];
var nofworkarray=[];
var logindata;
var villagedata="";
var surveyor_list="";
loginarray.push("0,superuser,dsslr,dsslr@123");
loginarray.push("1,Surveyor1,user1,user@123");
loginarray.push("1,Surveyor1,user2,user@123");
loginarray.push("2,DIOS,dios,dios@123");
loginarray.push("3,DIOS,dios,dios@123");

nofworkarray.push("F-line,Application No,Village,Survey No,Extent(in acres)");
nofworkarray.push("Patta Subdivision,Application No,Village,Survey No,Extent(in acres),No of Subdivisions");
nofworkarray.push("Land Acquisition,Project Name,Village,Survey No,Extent(in acres),No of Subdivisions");
nofworkarray.push("Assignment,,Project Name,Village,Survey No,Extent(in acres),No of Subdivisions");
nofworkarray.push("Alienation,,Project Name,Village,Survey No,Extent(in acres),No of Subdivisions");
nofworkarray.push("Government Land Refixing,File Number,Village,Survey No,Extent(in acres)");
nofworkarray.push("House Site Plot Layout,Village,Survey No,Extent(in acres),No of Plots");
nofworkarray.push("Record Work,No of FMBs,Village,Survey No,Extent(in acres),No of Subdivisions");
nofworkarray.push("Meeting,Name of the Meeting,Place of the Meeting,My Roal in Meeeting");
nofworkarray.push("Followed with Officers,File Number,Designation of Offeres,Village,Survey No,Extent(in acres)");
function Click_login()
{
	var uname=$('#txt_username').val();
	var upwd=$('#txt_password').val();
	if(uname!="")
	{
		 if(upwd!="")
		 {
			 if(uname=="dsslr")
			 {
				 if(upwd=="dsslr@123")
				 {
					fn.load('complaintreport.html');
				 }
				 
			 }
			  else if(uname=="ios")
			 {
				  if(upwd=="ios@123")
				 {
					fn.load('ios.html');
				 }
			 }
			  else if(uname=="ad")
			 {
				  if(upwd=="ad@123")
				 {
					fn.load('ad.html');
				 }
			 }
			 else if(uname=="user")
			 {
				 fn.load('welcome.html');
			 }
			  else if(uname=="dios")
			 {
				  if(upwd=="dios@123")
				 {
					fn.load('dios.html');
					$.post(SERVICE_PATH+"rest/TDService/Ditaluks",
                        {
                            state: Code,
							uid:'KRI-DI-VJW',//logindata.userid,
                            dcode:'06',// logindata.dcode,
                            urole:'4'//logindata.urole
                        },
                        function (data) {
							
							if(data)
							{
								surveyor_list ="<option  value='0'>Select</option>";
								if(data.length>0)
								{
									for (var i = 0; i < data.length; i++) {
										surveyor_list +="<option  value='"+data[i].code+"'>"+data[i].name+"</option>"
									}
								}
							}
							
						});
				 }
			 }
			 else if(uname)
			 {
				 //$('#login_dialog_alert').html("123");
				 $.post(SERVICE_PATH+"rest/TDService/login",
                        {
                            //state: Code,
                            userid: uname,
                            password:upwd
                        },
                        function (data) {
							//$('#login_dialog_alert').html(data.msg);
							if(data)
							{
								logindata=data;
								
								if(data.msg ="Success"){
									
									 fn.load('welcome.html');
									 $('#lbl_uname').text(logindata.uname);
									
								//fn.load('tourdiary.html');
						
							}
								
							}
						});
				 
			 }
			
			 else
			 {
				  $('#login_dialog_alert').html("Invalid User name and password");
			 }
			 //load_Villages();
			
		 }
		 else{
			 $('#login_dialog_alert').html("Please Enter Password");
		 }
	}
	else{
		$('#login_dialog_alert').html("Please Enter User Name");
	}
	
	 $('#login_dialog').show();
}
function login_dialogConfirm()
{
	 $('#login_dialog').hide();
}

function Add_Click()
{
	$('#div_dairyalert').html("");
	var obj=null;
	if(selectcase==1 || selectcase==12)
	{
		if($("#txt_appno").val()!="")
		{
			if($("#txt_sno").val()!="")
			{
				if($("#txt_extent").val()!="")
				{
					obj={tdate: $("#txt_date").val(), vcode: $("#villagedown :selected").text(),surveyno: $("#txt_sno").val(),fno:$("#txt_appno").val(),workname:$("#ddl_nwork :selected").text(),area:$("#txt_extent").val(),subdivs:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};		
				}
				else
				{
					$('#div_dairyalert').html("Please Enter Extent");
					$('#dairy-dialog').show();
				}
			}
			else
			{
				$('#div_dairyalert').html("Please Enter Survey Number");
				$('#dairy-dialog').show();
			}
		}
		else{
			$('#div_dairyalert').html("Please Enter Application number");
			$('#dairy-dialog').show();
		}
		
	}
	else if(selectcase==2)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_appno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==3 || selectcase==4 || selectcase==5)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_projectno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==6)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_fno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:"",fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==7)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:"",natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:"",fmbs:"",plots:$("#txt_plotsno").val(),remarks:""};	
	}
	else if(selectcase==8)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_fmbsno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==9)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_fmbsno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==10)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_fmbsno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==11)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_fmbsno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==13)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_fmbsno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	else if(selectcase==14)
	{
		obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_fmbsno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:$("#txt_subno").val(),fmbs:"",plots:"",remarks:""};	
	}
	
	dataarray.push(obj);
	//Add_Click1();
	savework();
	
	//dataarray.push(obj);
}

function savework()
{
	if(dataarray.length > 0){
	dataarray[0]["uid"]=logindata.uno; //check once error coming
	dataarray[0]["name"]=logindata.userid;
	dataarray[0]["urole"]=logindata.urole;
	dataarray[0]["dcode"]=logindata.dcode;
	dataarray[0]["tcode"]=logindata.tcode;
	dataarray[0]["uname"]=logindata.uname;
	dataarray[0]["workid"]=$("#ddl_nwork :selected").val();
	
	$.post(SERVICE_PATH+"rest/TDService/savework",
                        {
                            state: Code,
                            json_ary: dataarray[0]
                        },
                        function (data) {
							
							if(data)
							{
								if(data[0].msg=="yes")
							{
								$('#div_dairyalert').html("Work sheet inserted Sucessfully");
								$('#dairy-dialog').show();
							}
							else{
								$('#div_dairyalert').html("Work Sheet inserting Failed");
								$('#dairy-dialog').show();
							}
							}else{
								$('#div_dairyalert').html("Work Sheet inserting Failed");
								$('#dairy-dialog').show();
							}
							
						});
	
	}
	else{
	$('#div_dairyalert').html("Please Enter Fields");
	$('#dairy-dialog').show();
	}
		
}

function Add_Click1()
{	
var inputdata=$("#txt_date").val();
inputdata+=","+$("#ddl_nwork :selected").text()+"";
	//dataarray.push($("#txt_date").val());
	//dataarray.push($("#ddl_nwork :selected").text());
if(tblcount == 0)
{
	//$("#tbl_data").append("<tr>");
	var traa1="<tr>";
	var table = document.getElementById('tbl_fields'), 
    rows = table.getElementsByTagName('tr'),
    i, j, cells;
	for (i = 0, j = rows.length-1; i < j; ++i) {
		cells = rows[i].getElementsByTagName('td');
			if (!cells.length) {
				continue;
			}
			if(cells[0].innerHTML=="Select Village")
			{
				traa1+="<th>Village</th>";
			}
			else
			{
			traa1+="<th>"+cells[0].innerHTML+"</th>";
			}
		//$("#tbl_data").append("<th>"+cells[0].innerHTML+"</th>");
	}
	traa1+="</tr>";
	$("#tbl_data").append(traa1);
}
	
	var traa="<tr>";
	//$("#tbl_data").append("<tr>");
	var table = document.getElementById('tbl_fields'), 
    rows = table.getElementsByTagName('tr'),
    i, j, cells;
	for (i = 0, j = rows.length-1; i < j; ++i) {
		cells = rows[i].getElementsByTagName('td');
			if (!cells.length) {
				continue;
			}
			if(cells[0].innerHTML=="Select Village")
			{
				traa+="<td>"+$("#villagedown :selected").text()+"</td>";
				inputdata+=","+$("#villagedown :selected").text()+"";
			}
			else
			{
				traa+="<td>"+table.rows[i].cells[1].childNodes[0].value+"</td>";
				inputdata+=","+table.rows[i].cells[1].childNodes[0].value+"";
			}
			
			
			table.rows[i].cells[1].childNodes[0].value="";
		//$("#tbl_data").append("<td>"+table.rows[i].cells[1].childNodes[0].value+"</td>");
	}
	//dataarray.push(inputdata);
	traa+="</tr>";
	$("#tbl_data").append(traa);
	if(tblcount == 0)
	{
		document.getElementById('div_adddata').style.display = 'block';
		//tbl1+="</table>";
	}	
	tblcount=1;
	//$('#div_adddata').append(tbl1);
}
function Change_work(evt)
{
	//document.getElementById('div_adddata').style.display = 'none';
	//if(dataarray.length==0)
	//{
	$('#div_fields').html("");
	var tbl="<table id='tbl_fields'>";
selectcase=	evt.value;
tblcount=0;
	if(evt.value==1 || evt.value==12)
	{
		//$('#div_dairyalert').html(villagedata);
	//$('#dairy-dialog').show();
		tbl+="<tr><td width=150px'>Application No (Meeseva)</td><td width=150px'><input type='text' id='txt_appno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"+villagedata+"</select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
				tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent' type='number' pattern='[0-9]*'></td></tr>";
			
	}
	else if(evt.value==2)
	{
		
		tbl+="<tr><td width=150px'>Application No (Meeseva)</td><td width=150px'><input type='text' id='txt_appno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"+villagedata+"</select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent' type='number' pattern='[0-9]*'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";
		
	}
	else if(evt.value==3 || evt.value==4 || evt.value==5)
	{		
		tbl+="<tr><td width=150px'>Name of The Project</td><td width=150px'><input type='text' id='txt_projectno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"+villagedata+"</select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";

	}
	else if(evt.value==6)
	{
		tbl+="<tr><td width=150px'>File Number</td><td width=150px'><input type='text' id='txt_fno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"+villagedata+"</select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		
	}
	else if(evt.value==7)
	{	
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"+villagedata+"</select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Plots</td><td width=150px'><input type='text' id='txt_plotsno'></td></tr>";
	
	}
	else if(evt.value==8)
	{		
		tbl+="<tr><td width=150px'>No of FMBs</td><td width=150px'><input type='text' id='txt_fmbsno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"+villagedata+"</select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";
	}
	else if(evt.value==9)
	{		
		tbl+="<tr><td width=150px'>Name of the Meeting</td><td width=150px'><input type='text' id='txt_tr0'></td></tr>";
		tbl+="<tr><td width=150px'>Place of the Meeting</td><td width=150px'><input type='text' id='txt_tr1'></td></tr>";
		tbl+="<tr><td width=150px'>My Roal in Meeeting</td><td width=150px'><input type='text' id='txt_tr2'></td></tr>";	
		
	}
	else if(evt.value==10)
	{		
		tbl+="<tr><td width=150px'>File Number</td><td width=150px'><input type='text' id='txt_fno'></td></tr>";
		tbl+="<tr><td width=150px'>Designation of Offeres</td><td width=150px'><input type='text' id='txt_desig'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"+villagedata+"</select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		
	}
	else if(evt.value==11 || evt.value==18 )
	{		
		tbl+="<tr><td width=150px'>File Number</td><td width=150px'><input type='text' id='txt_fno'></td></tr>";
		tbl+="<tr><td width=150px'>Select District</td><td width=150px'><select  id='ddl_dist'><option value='1'>Krishna</option> </select></td></tr>"
		tbl+="<tr><td width=150px'>Select Mandal</td><td width=150px'><select  id='ddl_mandal'><option value='1'>Ja</option> </select></td></tr>"
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"
			tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";
		tbl+="<tr><td width=150px'>No of Errors</td><td width=150px'><input type='text' id='txt_tr4'></td></tr>";
	}
	else if(evt.value==13 || evt.value==14 || evt.value==19 )
	{		
		
		tbl+="<tr><td width=150px'>Select District</td><td width=150px'><select  id='ddl_dist'><option value='1'>Krishna</option> </select></td></tr>"
		tbl+="<tr><td width=150px'>Select Mandal</td><td width=150px'><select  id='ddl_mandal'><option value='1'>Ja</option> </select></td></tr>"
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'>"
			tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Survey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";
		
	}
	else
	{
		tbl+="<tr><td width=150px'>Plese Enter </td><td width=150px'><textarea id='txt_others' rows='5' cols='40'></textarea></td></tr>";
		
	}
	tbl+="<tr><td colspan='2' align='center'> <button  class='mybutton1' value='Add' onclick='Add_Click()'>Add & Save</button></td></tr>";
	//<button  value='Submit' class='mybutton1' onclick='dSubmit_Click()'>Save</button>
	tbl+="</table>"
	$('#div_fields').html(tbl);
	//}
	//else
	//{
		// $('#div_alert').html("Please Save the Work");
		 //$('#dairy-alert').show();
	//}
}
function dSubmit_Click()
{
	//test();
	var len=dataarray.length;
	if(len>0)
	{
		for(var i=0;i<dataarray.length;i++)
		{
			saveworkarray.push(dataarray[i]);
		}
		//saveworkarray		
		//dataarray=[];
		$('#tbl_data').empty();
			// $('#div_adddata').innerHTML="";
	 $('#div_alert').html("To Day Dairy Submited Sucessfully");
	 $('#dairy-alert').show();

	 document.getElementById('div_adddata').style.display = 'none';
	 selectcase=0;
	}
	else
	{
		 $('#div_alert').html("Please Add Work");
	     $('#dairy-alert').show();
	}
}
function dairyConfirm1()
{
	$('#dairy-dialog').hide();
}
function Diaryclick()
{
	$('#sel_lbl_rname').hide();
	$('#sel_lbl_name').show();
	 document.getElementById('div_com').style.display = 'block';
	  document.getElementById('div_sub').style.display = 'none';
}
function reportdiary_click()
{
	$('#sel_lbl_name').hide();
	$('#sel_lbl_rname').show();
	document.getElementById('div_com').style.display = 'none';
	 document.getElementById('div_sub').style.display = 'block';
}
function Downloadexcel_Click()
{
	 $('#div_dairyalert').html(" progress under process");
	     $('#dairy-dialog').show();
}
function View_Click()
{
	var tbl="<table>";
	var f1count=10;var f2count=0; var f3count=5; var f4count=8; var f5count=0;
	var f6count=4; var f7count=20;var f8count=0;var f9count=0;var f10count=2;
	var f11count=8;var f12count=0;var f13count=6;var f14count=1;
	for(var i=0;i<saveworkarray.length;i++)
	{
		var array = saveworkarray[i].split(',');
		//for(var j=0;j<array.length;j++)
		//{
			if(array[1]=="F-line")
			{				
		       f1count++;
				document.getElementById('tr_f1').style.display = 'block';
			}
			else if(array[1]=="Patta Subdivision")
			{
				f2count++;
				document.getElementById('tr_f2').style.display = 'block';
			}
			else if(array[1]=="Land Acquisition")
			{
				f3count++;
				document.getElementById('tr_f3').style.display = 'block';
			}
			else if(array[1]=="Assignment")
			{
				f4count++;
				document.getElementById('tr_f4').style.display = 'block';
			}
			else if(array[1]=="Alienation")
			{
				f5count++;
				document.getElementById('tr_f5').style.display = 'block';
			}
			else if(array[1]=="Government Land Refixing")
			{
				f6count++;
				document.getElementById('tr_f6').style.display = 'block';
			}
			else if(array[1]=="House Site Plot Layout")
			{
				f7count++;
				document.getElementById('tr_f7').style.display = 'block';
			}
			else if(array[1]=="Record Work")
			{
				f8count++;
				document.getElementById('tr_f8').style.display = 'block';
			}
			else if(array[1]=="Meeting")
			{
				f9count++;
				document.getElementById('tr_f9').style.display = 'block';
			}
			else if(array[1]=="Followed with Officers")
			{
				f10count++;
				document.getElementById('tr_f10').style.display = 'block';
			}
			else if(array[1]=="Incorporation of Changes")
			{
				f11count++;
				document.getElementById('tr_f11').style.display = 'block';
			}
			else if(array[1]=="Applied Demarcation")
			{
				f12count++;
				document.getElementById('tr_f12').style.display = 'block';
			}
			else if(array[1]=="Leaves")
			{
				f13count++;
				document.getElementById('tr_f13').style.display = 'block';
			}
			else{
				f14count++;
				document.getElementById('tr_f14').style.display = 'block';
			}
		//}
		
	}
	 $('#lbl_f1').text(f1count);
	 $('#lbl_f2').text(f2count);
	$('#lbl_f3').text(f3count);
	$('#lbl_f4').text(f4count);
	$('#lbl_f5').text(f5count);
	$('#lbl_f6').text(f6count);
	$('#lbl_f7').text(f7count);
	$('#lbl_f8').text(f8count);
	$('#lbl_f9').text(f9count);
	$('#lbl_f10').text(f10count);
	$('#lbl_f11').text(f11count);
	$('#lbl_f12').text(f12count);
	$('#lbl_f13').text(f13count);	
	$('#lbl_f14').text(f14count);
	$('#work_cnt').show();
}
function test()
{
var content = '<?xml version="1.0" encoding="UTF-8"?>';
 content+='<logins>';
 content +='<properties>'
 content +='<username>something</username>'
 content +='<password>something</password>'
 content +='</properties>'
 content +='</logins>';

var  storedFileName = "login.xml";
var storedContent = content;
   StoreLocalXML();
}

  /* Create Local Xml Files */
    function StoreLocalXML() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, Fail);
    }
 
    function gotFS(fileSystem) {
        // create dir
        fileSystem.root.getDirectory("folderName", {
            create: true,
            exclusive: false
        }, gotDirEntry, Fail);
    }

    function gotDirEntry(dirEntry) {
        // create file
        dirEntry.getFile(storedFileName, {
            create: true,
            exclusive: false
        }, gotFileEntry, Fail);
    }

    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, Fail);
       
    }

    function gotFileWriter(writer) {
           
        writer.onwrite = function (evt) {
            console.log("write completed");
        };
        writer.write(storedContent);
        writer.abort();
      
    }

    function Fail(error) {
        console.log(error.code);
    }

 function callAnothePage()
             {
                window.location = "newspaper_main.html";
             }
function Surveyor_Diary_report()
{
	if(dataarray.length>0)
	{
		//obj={date: $("#txt_date").val(), village: $("#villagedown :selected").text(),Surveyno: $("#txt_sno").val(),applicationno:$("#txt_appno").val(),natureofwork:$("#ddl_nwork :selected").text(),extent:$("#txt_extent").val(),subdivisions:"",fmbs:"",plots:"",remarks:""};
	
		var traa="";
		for(var i=0;i<dataarray.length;i++)
		{
		   traa+="<tr><td>"+dataarray[i].date+"</td><td>"+dataarray[i].village+"</td><td>"+dataarray[i].Surveyno+"</td><td>"+dataarray[i].applicationno+"</td>";
			traa+="<td>"+dataarray[i].natureofwork+"</td><td>"+dataarray[i].extent+"</td><td>"+dataarray[i].subdivisions+"</td><td>"+dataarray[i].fmbs+"</td><td>"+dataarray[i].plots+"</td><td>"+dataarray[i].remarks+"</td></tr>";

		}
		 $("#tbl_Surveyor_Diary").append(traa);
	}
}
function Surveyor_Diary_report1()
{
					if(dataarray.length>0)
					 {
						 var privework="";
						 var privedate="";
						 //$('#lbl_comcount').text(" Total Complaints : "+comarray.length+"");
						var traa="<tr><th>Date</th><th>Nature of Work</td><th></th></tr>";
						//var i="";
						for(var i=0;i<dataarray.length;i++)
							{							 
							  var array = dataarray[i].split(',');
							  if(privework=="")
							  {
								for(var j=0;j<nofworkarray.length;j++)
								{
 								 var array1 = nofworkarray[j].split(',');								  
										if(array[1]==array1[0])
										{		
											
											traa+="<tr><td>"+array[0]+"</td><td>"+array[1]+"</td>";
											traa+="<td><table border='1' style='border-collapse: collapse'><tr>";
											//table column text
											for(var k=1;k<array1.length;k++)
											{
												traa+="<th>"+array1[k]+"</th>";
											}
												traa+="</tr>";
											//data bind	
											traa+="<tr>";											
											for(var x=2;x<array.length;x++)
											{
												traa+="<td>"+array[x]+"</td>";
											}
											
											traa+="</tr>";
											privework=array[1];
											privedate=array[0];
											//i++;
									
										}
										
								      //break;
									}
							  }
								else
								{
									if(privework==array[1])
									{
										traa+="<tr>";											
											for(var x=2;x<array.length;x++)
											{
												traa+="<td>"+array[x]+"</td>";
											}
											
											traa+="</tr>";
											privework=array[1];
											privedate=array[0];
									}
									else
									{
										traa+="</table></td></tr>";
										for(var j=0;j<nofworkarray.length;j++)
										{
										var array1 = nofworkarray[j].split(',');								  
										if(array[1]==array1[0])
										{		
											
											traa+="<tr><td>"+array[0]+"</td><td>"+array[1]+"</td>";
											traa+="<td><table border='1' style='border-collapse: collapse'><tr>";
											//table column text
											for(var k=1;k<array1.length;k++)
											{
												traa+="<th>"+array1[k]+"</th>";
											}
												traa+="</tr>";
											//data bind	
											traa+="<tr>";											
											for(var x=2;x<array.length;x++)
											{
												traa+="<td>"+array[x]+"</td>";
											}
											
											traa+="</tr>";
											privework=array[1];
											privedate=array[0];
											//i++;
									
										}
										
								      //break;
										}
									}
								}
								
								
							}
						 $("#tbl_Surveyor_Diary").append(traa);
					    
					 }
}
function diosrecomaned_click()
{
}