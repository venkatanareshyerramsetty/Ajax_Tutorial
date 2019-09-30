//Tour dairy functions
var application_no='';
var isValid = true;
$(document).ready(function(){

	load_self();
	load_servy_div();
	load_dios_div() ;
	usergetDetailsService();
	disableBackButton();
});



function Change_work(evt)
{
	
	$('#div_fields').html("");
	var tbl="<table id='tbl_fields'>";
selectcase=	evt.value;
tblcount=0;
	if(evt.value==1 || evt.value==12)
	{
		//$('#div_dairyalert').html(villagedata);
	//$('#dairy-dialog').show();

		//alert("1_12");
		
		tbl+="<tr><td width=150px'>Application No (Meeseva)</td><td width=150px'><input type='text' id='txt_appno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
				tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent' type='number' pattern='[0-9]*'></td></tr>";
			
	}
	else if(evt.value==2)
	{
		//alert("2");
		tbl+="<tr><td width=150px'>Application No (Meeseva)</td><td width=150px'><input type='text' id='txt_appno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent' type='number' pattern='[0-9]*'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";


	}
	else if(evt.value==3 || evt.value==4 || evt.value==5)
	{		

		//alert("3_4_5");
		tbl+="<tr><td width=150px'>Name of The Project</td><td width=150px'><input type='text' id='txt_projectno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";

	}
	else if(evt.value==6)
	{	
		//alert("6");
		tbl+="<tr><td width=150px'>File Number</td><td width=150px'><input type='text' id='txt_fno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		
	}
	else if(evt.value==7)
	{	

		//alert("7");
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Plots</td><td width=150px'><input type='text' id='txt_plotsno'></td></tr>";
	
	}
	else if(evt.value==8)
	{	
		//alert("8");	
		tbl+="<tr><td width=150px'>No of FMBs</td><td width=150px'><input type='text' id='txt_fmbsno'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";
	}
	else if(evt.value==9)
	{		
		//alert("9");
		tbl+="<tr><td width=150px'>Name of the Meeting</td><td width=150px'><input type='text' id='txt_tr0'></td></tr>";
		tbl+="<tr><td width=150px'>Place of the Meeting</td><td width=150px'><input type='text' id='txt_tr1'></td></tr>";
		tbl+="<tr><td width=150px'>My Role in Meeeting</td><td width=150px'><input type='text' id='txt_tr2'></td></tr>";	
		
	}
	else if(evt.value==10)
	{		
		//alert("10");
		tbl+="<tr><td width=150px'>File Number</td><td width=150px'><input type='text' id='txt_fno'></td></tr>";
		tbl+="<tr><td width=150px'>Designation of Offeres</td><td width=150px'><input type='text' id='txt_desig'></td></tr>";
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		
	}

	else if(evt.value==12 || evt.value==15){
		tbl+="<tr><td width=150px'>Plese Enter Others </td><td width=150px'><textarea id='txt_others' rows='5' cols='40'></textarea></td></tr>";

	}

	else if(evt.value==16){
		tbl+="<tr><td width=150px'>Plese Enter Holidays </td><td width=150px'><textarea id='txt_holidays' rows='5' cols='40'></textarea></td></tr>";

	}

	else if(evt.value==17){
		tbl+="<tr><td width=150px'>Plese Enter Leaves </td><td width=150px'><textarea id='txt_leaves' rows='5' cols='40'></textarea></td></tr>";

	}

	else if(evt.value==11 || evt.value==18 )
	{	
		//alert("11_18");	
		tbl+="<tr><td width=150px'>File Number</td><td width=150px'><input type='text' id='txt_fno'></td></tr>";
		tbl+="<tr><td width=150px'>Select District</td><td width=150px'><select  id='ddl_dist'><option value='"+district.dist_code+"'>"+district.dist_name+"</option> </select></td></tr>"
		tbl+="<tr><td width=150px'>Select Mandal</td><td width=150px'><select  id='ddl_mandal'><option value='"+taluk_name.taluk_code+"'>"+taluk_name.taluk_name+"</option> </select></td></tr>"
		tbl+="<tr><td width=150px'>Select Village</td><td width=150px'><select  id='villagedown'><option value =''>Select Village</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";
		tbl+="<tr><td width=150px'>No of Errors</td><td width=150px'><input type='text' id='txt_tr4'></td></tr>";
	}
	else if(evt.value==13 || evt.value==14 || evt.value==19 )
	{		
		//alert("13_14_19");

		tbl+="<tr><td width=150px'>Select District</td><td width=150px'><select  id='ddl_dist'><option value='"+district.dist_code+"'>"+district.dist_name+"</option> </select></td></tr>"
		tbl+="<tr><td width=150px'>Select Mandal</td><td width=150px'><select  id='ddl_mandal'><option value='"+taluk_name.taluk_code+"'>"+taluk_name.taluk_name+"</option> </select></td></tr>"
		tbl+="<tr><td>Select Village</td><td>"
		tbl += "<select  id='villagedown' class='w3-select'><option value =''>Select Village</option></select></td></tr>";
		tbl+="<tr><td width=150px'>Servey No</td><td width=150px'><input type='text' id='txt_sno'></td></tr>";
		tbl+="<tr><td width=150px'>Extent(in acres)</td><td width=150px'><input type='text' id='txt_extent'></td></tr>";
		tbl+="<tr><td width=150px'>No of Subdivisions</td><td width=150px'><input type='text' id='txt_subno'></td></tr>";
		
		
	
	}
	else
	{
		tbl+="<tr><td width=150px'>Plese Enter </td><td width=150px'><textarea id='txt_others' rows='5' cols='40'></textarea></td></tr>";
		
	}
	tbl+="<tr><td colspan='2' align='center'> <button  class='mybutton1' value='Add' onclick='validationsOfUserFields(),Add_Click()'>Add & Save</button></td></tr>";
	//<button  value='Submit' class='mybutton1' onclick='dSubmit_Click()'>Save</button>
	tbl+="</table>"
	$('#div_fields').html(tbl);
	villagesDropDown();
	//}
	//else
	//{
		// $('#div_alert').html("Please Save the Work");
		 //$('#dairy-alert').show();
	//}
}


var  time='';
function load_self() {


	var usersession = sessionStorage.getItem('userArray');
	var passwordsession = sessionStorage.getItem('passArray');
	console.log(usersession);
	console.log(passwordsession);

	
  
	 $('#self_table ').html('');

    var ht = '<tr ><td>Date &nbsp&nbsp  </td><td><input type="text" id="txt_date" ></td></tr>';
 	ht += '<tr ><td>Nature of Work &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_nwork" onchange="Change_work(this);" >';

    ht += '<option value="1">F-line</option>';
	ht += '<option value="2">Patta Subdivision</option>';
	ht += '<option value="3">Land Acquisition</option>';
	ht += '<option value="4">Assignment</option>';
	ht += '<option value="5">Alienation</option>';
	ht += '<option value="6">Government Land Refixing</option>';
	ht += '<option value="7">House Site Plot Layout</option>';
	ht += '<option value="8">Record Work</option>';
	ht += '<option value="9">Meeting</option>';
	ht += '<option value="10">Followed with Officers</option>';
	ht += '<option value="11">Field Inspection(officer) </option>';
	ht += '<option value="12">Incorporation of Changes</option>';
	ht += '<option value="13">Applied Demarcation</option>';
	ht += '<option value="14">Pre Scrutiny/Scrutiny</option>';
	ht += '<option value="15">Others,Specify</option>';
	ht += '<option value="16">Holidays</option>';
	ht += '<option value="17">Leaves</option>';
	ht += '<option value="18">Field Inspection(Surveyor)</option>';
	ht += '<option value="19">Grievance Petitions</option>';
    ht += '</select></td></tr>';

    $('#self_table').append($(ht));

	
 $('#div_fields').html("");
	var tbl="<table id='tbl_fields' class='container'>";
	
		
		tbl+="<tr><td width='36%'>Application No (Meeseva)</td><td><input type='text' id='txt_appno'></td></tr>";
		tbl+="<tr><td>Select Village</td><td><select  id='villagedown' class='w3-select'><option value =''>Select Village</option></select></td></tr>";
			//tbl+="<option value='1'>Takkellapadu</option><option value='2'>Tirumalagiri</option><option value='3'>Torraguntapalem</option><option value='4'>Tripuravaram</option><option value='5'>Pochampalle</option><option value='6'>Mukteswarapuram</option><option value='7'>Gowravaram</option></select></td></tr>";
		tbl+="<tr><td >Servey No</td><td><input id='txt_sno' maxlength='10' name='txtNumber' type='number' pattern='[0-9]*'></td></tr>";
		tbl+="<tr><td >Extent(in acres)</td><td ><input maxlength='10' id='txt_extent' type='number' pattern='[0-9]*'></td></tr>";
	tbl+="<tr><td colspan='2' align='center'> <button id='mybutton1' class='mybutton1' value='Add' onclick='validationsOfUserFields(),Add_Click()'>save & Add Work</button></td></tr>";
	// <button  value='Submit' class='mybutton1' onclick='dSubmit_Click()'>Save</button>";
	tbl+="</table>"
	$('#div_fields').html(tbl);	
	 $("#txt_date").datepicker({ dateFormat: "yy-mm-dd"}).datepicker("setDate", "0"); 
	 /*var dt = new Date();
	  time = dt.getHours() + ":" + dt.getMinutes();
	 console.log(time);*/
}

var surveyor_list='';
function load_servy_div() {
	$('#survey_rtab ').html('');

    
var ht = '<tr ><td>Surveyor &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_servyname" >';

ht += surveyor_list+ '</select></td></tr>';

   // ht += '<option value="1">Jaggayyapeta</option>';
	//ht += '<option value="2">Ibrahimpatnam</option>';
	////ht += '<option value="3">Nandigama</option>';
	//ht += '<option value="4">Gannavaram</option>';

  //  ht += '</select></td></tr>';
	
	//ht += '<tr ><td>Surveyor &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_servyname"  >';
  //  ht += '<option value="1">Surveyor1</option>';
	//ht += '<option value="2">Surveyor2</option>';
	//ht += '<option value="2">Surveyor3</option>';

   // ht += '</select></td></tr>';
	
	ht += '<tr ><td>Month &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_month">';
    ht += '<option value="1">January</option>';
	ht += '<option value="2">February</option>';
	ht += '<option value="3">March</option>';
	ht += '<option value="4">April</option>';
	ht += '<option value="5">May </option>';
	ht += '<option value="6">June</option>';
	ht += '<option value="7">July</option>';
	ht += '<option value="8">August</option>';
	ht += '<option value="9">September</option>';
	ht += '<option value="10">October</option>';
	ht += '<option value="11">November</option>';
	ht += '<option value="12">December</option>';

    ht += '</select></td></tr>';
	
	ht += '<tr ><td colspan="2" align="center"><button class="w3-btn w3-block w3-teal" value="login" onclick="diosrecomaned_click()">Recamend</button></td></tr>';

    $('#survey_rtab').append($(ht));
}
function load_dios_div() {
	$('#dios_rtab ').html('');

    
var ht = '<tr ><td>District &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_dist" >';

    ht += '<option value="1">Jaggayyapeta</option>';
	ht += '<option value="2">Ibrahimpatnam</option>';
	ht += '<option value="3">Nandigama</option>';
	ht += '<option value="4">Gannavaram</option>';

    ht += '</select></td></tr>';
	
	ht += '<tr ><td>DIOS &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_diosname"  >';
    ht += '<option value="1">Dios1</option>';
	ht += '<option value="2">Dios2</option>';
	ht += '<option value="2">Dios3</option>';

    ht += '</select></td></tr>';
	
	ht += '<tr ><td>Month &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_month">';
    ht += '<option value="1">January</option>';
	ht += '<option value="2">February</option>';
	ht += '<option value="3">March</option>';
	ht += '<option value="4">April</option>';
	ht += '<option value="5">May </option>';
	ht += '<option value="6">June</option>';
	ht += '<option value="7">July</option>';
	ht += '<option value="8">August</option>';
	ht += '<option value="9">September</option>';
	ht += '<option value="10">October</option>';
	ht += '<option value="11">November</option>';
	ht += '<option value="12">December</option>';

    ht += '</select></td></tr>';
	
	ht += '<tr ><td colspan="2" align="center"><button class="w3-btn w3-block w3-teal" value="login" onclick="recomaned_click()">Recamend</button></td></tr>';

    $('#dios_rtab').append($(ht));
}
function load_ios_div() {
	$('#dios_rtab ').html('');

    
var ht = '<tr ><td>District &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_dist" >';

    ht += '<option value="1">Jaggayyapeta</option>';
	ht += '<option value="2">Ibrahimpatnam</option>';
	ht += '<option value="3">Nandigama</option>';
	ht += '<option value="4">Gannavaram</option>';

    ht += '</select></td></tr>';
	
	ht += '<tr ><td>IOS &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_iosname"  >';
    ht += '<option value="1">IOS1</option>';
	ht += '<option value="2">IOS2</option>';
	ht += '<option value="2">IOS3</option>';

    ht += '</select></td></tr>';
	
	ht += '<tr ><td>Month &nbsp&nbsp  </td><td ><select class="ddcontrol" id="ddl_month">';
    ht += '<option value="1">January</option>';
	ht += '<option value="2">February</option>';
	ht += '<option value="3">March</option>';
	ht += '<option value="4">April</option>';
	ht += '<option value="5">May </option>';
	ht += '<option value="6">June</option>';
	ht += '<option value="7">July</option>';
	ht += '<option value="8">August</option>';
	ht += '<option value="9">September</option>';
	ht += '<option value="10">October</option>';
	ht += '<option value="11">November</option>';
	ht += '<option value="12">December</option>';

    ht += '</select></td></tr>';
	
	ht += '<tr ><td colspan="2" align="center"><button class="w3-btn w3-block w3-teal" value="login" onclick="recomaned_click()">Recamend</button></td></tr>';

    $('#dios_rtab').append($(ht));
}

function load_tbl_report() {
		$('#tbl_report_diary ').html('');
		
		var ht = '<tr><th>Date</th><th>Mandal</th><th>Village</th><th>Survey No</th><th>Application No/File No</th><th>Name of The Project/Nature of Work</th><th>Extent</th><th>No of Subdivisions</th><th>No of Plots</th><th>Remarks</th></tr>';
		
		ht +='<tr><td>01\\01\\2019</td><td>జగ్గయ్యపేట </td><td>తక్కెళ్లపాడు </td><td>19</td><td>1038541532451</td><td>Patta-Subdivision</td><td>4.2</td><td>2</td><td>1</td><td>Remarks</td></tr>';
		ht +='<tr><td>02\\01\\2019</td><td>జగ్గయ్యపేట</td><td>గన్నవరం  </td><td>20</td><td>353455412342</td><td>F-line</td><td>1.1</td><td>1</td><td>1</td><td>Remarks</td></tr>';
		ht +='<tr><td>03\\01\\2019</td><td>జగ్గయ్యపేట</td><td>తక్కెళ్లపాడు </td><td>110</td><td>567451532345</td><td>Patta-Subdivision</td><td>3.3</td><td>2</td><td>1</td><td>Remarks</td></tr>';
		ht +='<tr><td>04\\01\\2019</td><td>జగ్గయ్యపేట </td><td>గరికపాడు  </td><td>79</td><td>343241547897</td><td>Record Work</td><td>6.4</td><td>1</td><td>1</td><td>Remarks</td></tr>';
		
		    $('#tbl_report_diary').append($(ht))
	
}

function load_survy_report() {
	
	//https://jsfiddle.net/u7ycrxph/    edit table code
		$('#tbl_Surveyor_Diary ').html('');
		
		var ht = '<tr><th>Date</th><th>Village</th><th>Survey No</th><th>Application No/File No</th><th>Name of The Project/Nature of Work</th><th>Extent</th><th>No of Subdivisions</th><th>No of Plots</th><th>No of Sub-div Incorp.</th><th>Remarks</th></tr>';
		
		ht +='<tr><td>01\\01\\2019</td><td>తక్కెళ్లపాడు </td><td>19</td><td>1038541532451</td><td>Patta-Subdivision</td><td>4.2</td><td>2</td><td>1</td><td>0</td><td>Remarks</td></tr>';
		ht +='<tr><td>02\\01\\2019</td><td>గన్నవరం  </td><td>20</td><td>353455412342</td><td>F-line</td><td>1.1</td><td>1</td><td>1</td><td>0</td><td>Remarks</td></tr>';
		ht +='<tr><td>03\\01\\2019</td><td>తక్కెళ్లపాడు </td><td>110</td><td>567451532345</td><td>Patta-Subdivision</td><td>3.3</td><td>2</td><td>1</td><td>0</td><td>Remarks</td></tr>';
		ht +='<tr><td>04\\01\\2019</td><td>గరికపాడు  </td><td>79</td><td>343241547897</td><td>Record Work</td><td>6.4</td><td>1</td><td>1</td><td>0</td><td>Remarks</td></tr>';
		
		    $('#tbl_Surveyor_Diary').append($(ht))
	
}
var villagedata='';
function login_role() {
	if(logindata.urole =="1")
	{
		fn.load('tourdiary.html');
		$.post(SERVICE_PATH+"rest/TDService/Get_village",
                        {
                            state: Code,
                            dcode: logindata.dcode,
                            tcode:logindata.tcode
                        },
                        function (data) {
							
							if(data)
							{
								villagedata ="<option  value='0'>Select</option>";
								if(data.length>0)
								{
									for (var i = 0; i < data.length; i++) {
										villagedata +="<option  value='"+data[i].code+"'>"+data[i].name+"</option>"
									}
								}
							}
							
						});
	}
	else if(logindata.urole =="4")
	{
		fn.load('dios.html');
	}
}
function Self_tabclick() {
	 $('#div_survy').hide();
	  $('#div_dios').hide();
	  $('#div_com').show();
}
function Surveyor_tabclick() {
	 $('#div_com').hide();
	  $('#div_dios').hide();
	 $('#div_survy').show();
load_servy_div();
load_survy_report();
}
function dios_tabclick() {
	 $('#div_com').hide();
	 $('#div_survy').hide();
	 $('#div_dios').show();
load_dios_div();
load_tbl_report();
}
function ios_tabclick() {
	 $('#div_com').hide();
	 $('#div_survy').hide();
	 $('#div_dios').show();
load_ios_div();
load_tbl_report();
}




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
	var passwordsession = sessionStorage.getItem('passArray');
	sessionStorage.setItem("userID",user_id);

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

		 sessionStorage.setItem('userID', user_id);
		 
		 
		for(var i= 0, l = result.length; i<l; i++){
			
			
				villagesNames.push(result[i][3]);
				
			
		}


		console.log(user_uname);


var option = '';
for (var i=0;i<villagesNames.length;i++){
   option += '<option value="'+ villagesNames[i].vill_code + '">' + villagesNames[i].vill_name + '</option>';
}
$('#villagedown').append(option);
	
	  
}});



};



//function for villages dropdown

var value=[];
var text=[];
function villagesDropDown(){

	// $.each(villagesNames, function (i, item) { 
    //     tbl+= "<option value='"+item.value+"'>"+item+"</option>"
	// 	});




	//populating in dropbox
	var selectDrop = $('#villagedown');

	
	$.each(villagesNames, function (i, item) {
 $('#villagedown').append($('<option>', { 
value: item.vill_code,
text : item.vill_name,

}));
});

}




//form-validations for user input fields

function validationsOfUserFields(){

	

	 var nature_of_work = parseInt($('#ddl_nwork').val());	
	console.log(nature_of_work);
	//application_no
	  application = $('#txt_appno').val();
	//servey_no
	var servey_no = document.querySelector('#txt_sno');
	//extent_no
	var extent_no = document.querySelector('#txt_extent');
	//subdivision
	var subdivision_no = $('#txt_subno').val();
	//name of the project
	var project = $('#txt_projectno').val();
	//file name
	var filename =$('#txt_fno').val();
	//no of plots
	var plotno = $('#txt_plotsno').val();
	//no of fmbs
	var nofmbs = $('#txt_fmbsno').val();
	//disgnation of oficers
	var disgnation = $('#txt_desig').val();
	
	var userleaves =$('#txt_leaves').val();
	
	var nooferrors =$('#txt_tr4').val();
	var userholidays =$('#txt_holidays').val();
	
	var meetingname =$('#txt_tr0').val();
	var meetingplace =$('#txt_tr1').val();
	var meetingmyrole =$('#txt_tr2').val();
	var Others =$('#txt_others').val();
	
	



	
	switch(nature_of_work != 0){
			
		case (nature_of_work == 1):

				var isValid = true;	
				//alert("inside case-0")

				  if(application.trim() == ""){
					alert("please enter application no");
					isValid = false;
					
        			
				}
			
				
				
				 else if(servey_no.value.trim() == ""){
					alert("please enter servey no");
					isValid = false;
					
       				
				}
			
			
				
				else if(extent_no.value.trim() == ""){
					alert("please enter extent value");
					isValid = false;
					
        			
				}

				break;


				case (nature_of_work == 2):

						var isValid = true;	
						//alert("inside case-2");

						  if(application.trim() == ""){
							alert("please enter application no");
							isValid = false;
						}
					
						
						
						 else if(servey_no.value.trim() == ""){
							alert("please enter servey no");
							isValid = false;
						}
					
					
						
						else if(extent_no.value.trim() == ""){
							alert("please enter extent value");
							isValid = false;
						}
					
						else if(subdivision_no.trim() == ""){
							alert("please enter subdivision no");
							isValid = false;
						}
					
						break;
		
		
			case (nature_of_work == 3):

					var isValid = true;	
					//alert("inside case-3");
		
		
					if(project.trim() == ""){
						alert("please enter project name");
						isValid = false;
					}
		
					
					 else if(servey_no.value.trim() == ""){
						alert("please enter servey no");
						isValid = false;
					}
				
				
					
					else if(extent_no.value.trim() == ""){
						alert("please enter extent value");
						isValid = false;
					}
				
					else if(subdivision_no.trim() == ""){
						alert("please enter subdivision no");
						isValid = false;
					
					}
					
				
					break;
		
		
			case (nature_of_work == 4):

					var isValid = true;	
					//alert("inside case-4");
		
		
					if(project.trim() == ""){
						alert("please enter project name");
						isValid = false;
					}
		
					
					 else if(servey_no.value.trim() == ""){
						alert("please enter servey no");
						isValid = false;
					}
				
				
					
					else if(extent_no.value.trim() == ""){
						alert("please enter extent value");
						isValid = false;
					}
				
					else if(subdivision_no.trim() == ""){
						alert("please enter subdivision no");
						isValid = false;
					}
					
				
					break;
		
		
		
		
			case (nature_of_work == 5):

					var isValid = true;	
					//alert("inside case-5");
		
		
					if(project.trim() == ""){
						alert("please enter project name");
						isValid = false;
					}
		
					
					 else if(servey_no.value.trim() == ""){
						alert("please enter servey no");
						isValid = false;
					}
				
				
					
					else if(extent_no.value.trim() == ""){
						alert("please enter extent value");
						isValid = false;
					}
				
					else if(subdivision_no.trim() == ""){
						alert("please enter subdivision no");
						isValid = false;
					}
					
				
					break;
		
		
		
		
			case (nature_of_work == 6):

					var isValid = true;	
					//alert("inside case-6");
		
					if(filename.trim() == ""){
						alert("please enter fileno");
						isValid = false;
					}
					
					 else if(servey_no.value.trim() == ""){
						alert("please enter servey no");
						isValid = false;
					}
				
					
					
					else if(extent_no.value.trim() == ""){
						alert("please enter extent value");
						isValid = false;
					}
				
					
				
					break;
		
		
			case (nature_of_work == 7):

					var isValid = true;	
					//alert("inside case-7");
		
		
		
					  if(servey_no.value.trim() == ""){
						alert("please enter servey no");
						isValid = false;
					}
				
				
					
					else if(extent_no.value.trim() == ""){
						alert("please enter extent value");
						isValid = false;
					}
				
					else if(plotno.trim() == ""){
						alert("please enter plot-no");
						isValid = false;
					}
					
				
					break;
		
		
			case (nature_of_work == 8):

					var isValid = true;	
					//alert("inside case-8")
		
		
					if(nofmbs.trim() == ""){
						alert("please enter FMBS");
						isValid = false;
					}
		
					
					 else if(servey_no.value.trim() == ""){
						alert("please enter servey no");
						isValid = false;
					}
				
				
					
					else if(extent_no.value.trim() == ""){
						alert("please enter extent value");
						isValid = false;
					}
				
					else if(subdivision_no.trim() == ""){
						alert("please enter subdivision no");
						isValid = false;
					}
					
				
					break;
		
		
		
			case (nature_of_work == 9):

					var isValid = true;	
					//alert("inside case-9")
		
		
					if(meetingname.trim() == ""){
						alert("please enter meeting-name");
						isValid = false;
					}
		
					
					 else if(meetingplace.trim() == ""){
						alert("please enter meeting-place");
						isValid = false;
					}
				
				
					
					else if(meetingmyrole.trim() == ""){
						alert("please enter meeting-role");
						isValid = false;
					}
				
					break;



		case (nature_of_work == 10):

				var isValid = true;	
				//alert("inside case-10");
	
				if(filename.trim() == ""){
					alert("please enter fileno");
					isValid = false;
				}

				else if(disgnation.trim() == ""){
					alert("please enter disgnation");
					isValid = false;
				}
				
				 else if(servey_no.value.trim() == ""){
					alert("please enter servey no");
					isValid = false;
				}
			
				
				
				else if(extent_no.value.trim() == ""){
					alert("please enter extent value");
					isValid = false;
				}
			
				
			
				break;
				
		
	case (nature_of_work == 11):

		var isValid = true;	
		//alert("inside case-11");
			
		if(filename.trim() == ""){
			alert("please enter fileno");
			isValid = false;
		}
		
	
		 else if(servey_no.value.trim() == ""){
			alert("please enter servey no");
			isValid = false;
		}
	
		
		
		else if(extent_no.value.trim() == ""){
			alert("please enter extent value");
			isValid = false;
		}


		else if(subdivision_no.trim() == ""){
			alert("please enter subdivision no");
			isValid = false;
		}


		else if(nooferrors.trim() == ""){
			alert("please enter no-errors");
			isValid = false;
		}
	
		
	
		break;



case (nature_of_work == 12):

	var isValid = true;	
	//alert("inside case-12")

	  if(application.trim() == ""){
		alert("please enter application no");
		isValid = false;
		
		
	}

	
	
	 else if(servey_no.value.trim() == ""){
		alert("please enter servey no");
		isValid = false;
		
		
	}


	
	else if(extent_no.value.trim() == ""){
		alert("please enter extent value");
		isValid = false;
		
		
	}

	break;

		


	case (nature_of_work == 13):

	var isValid = true;	
	//alert("inside case-13")

	
	
	  if(servey_no.value.trim() == ""){
		alert("please enter servey no");
		isValid = false;
		
		
	}


	
	else if(extent_no.value.trim() == ""){
		alert("please enter extent value");
		isValid = false;	
	}



	else if(subdivision_no.trim() == ""){
		alert("please enter subdivision no");
		isValid = false;
	}


	break;



	case (nature_of_work == 14):

	var isValid = true;	
	//alert("inside case-14")

	
	
	  if(servey_no.value.trim() == ""){
		alert("please enter servey no");
		isValid = false;	
	}


	else if(extent_no.value.trim() == ""){
		alert("please enter extent value");
		isValid = false;	
	}

	else if(subdivision_no.trim() == ""){
		alert("please enter subdivision no");
		isValid = false;
	}


	break;
			


	case (nature_of_work == 15):

	var isValid = true;	
	//alert("inside case-15")

	
	
	  if(Others.trim() == ""){
		alert("please enter others-field");
		isValid = false;	
	}

	break;



	case (nature_of_work == 16):

	var isValid = true;	
	alert("inside case-16")

	
	
	  if(userholidays.trim() == ""){
		alert("please enter holidays-field");
		isValid = false;	
	}

	break;


	case (nature_of_work == 17):

	var isValid = true;	
	//alert("inside case-17")

	
	
	  if(userleaves.trim() == ""){
		alert("please enter leaves-field");
		isValid = false;	
	}

	break;



case (nature_of_work == 18):

		var isValid = true;	
		//alert("inside case-18");
			
		if(filename.trim() == ""){
			alert("please enter fileno");
			isValid = false;
		}
		
	
		 else if(servey_no.value.trim() == ""){
			alert("please enter servey no");
			isValid = false;
		}
	
		
		
		else if(extent_no.value.trim() == ""){
			alert("please enter extent value");
			isValid = false;
		}


		else if(subdivision_no.trim() == ""){
			alert("please enter subdivision no");
			isValid = false;
		}


		else if(nooferrors.trim() == ""){
			alert("please enter no-errors");
			isValid = false;
		}
	
		
	
		break;


		case (nature_of_work == 19):

		var isValid = true;	
		//alert("inside case-19");
			
		 if(servey_no.value.trim() == ""){
			alert("please enter servey no");
			isValid = false;
		}
	
		
		
		else if(extent_no.value.trim() == ""){
			alert("please enter extent value");
			isValid = false;
		}


		else if(subdivision_no.trim() == ""){
			alert("please enter subdivision no");
			isValid = false;
		}		
	
		break;
			
		
	}

	if(isValid === false){
		e.preventDefault();
		return isValid;
	}
	else{
		alert('Details Saved Successfully');
		
		return true;
	}

	}




	function sessionStorageClear(){

		sessionStorage.clear();
	
		location.replace("Login_LandServey.html");
	}


function disableBackButton()
{
window.history.forward();
}



//posting of data service 
function Add_Click() {


	
	date_data =$('#txt_date').val();
	ro_id =role_id;
	user_id =user_id;
	user_name =user_name;
	user_role =user_role;
	dist_code =$('#ddl_dist option:selected').text();
	if(dist_code == ''){

		dist_code = 'null';
	}

	taluk_code =$('#ddl_mandal option:selected').text();


	if(taluk_code == ''){

		taluk_code = 'null';
	}

	//vill_code =$('#villagedown').text();
	vill_code =$('#villagedown option:selected').text();
	survey_no =$('#txt_sno').val();
	file_no =$('#txt_fno').val();
	nature_of_work =parseInt($('#ddl_nwork').val());
	console.log(nature_of_work);
	console.log(typeof(nature_of_work));
	application_no =$('#txt_appno').val();
	area_extent =$('#txt_extent').val();
	no_of_subdivisions =$('#txt_subno').val();
	no_of_plots =$('#txt_plotsno').val();
	user_leaves =$('#txt_leaves').val();
	no_of_errors =$('#txt_tr4').val();
	user_holidays =$('#txt_holidays').val();
	meeting_name =$('#txt_tr0').val();
	meeting_place =$('#txt_tr1').val();
	meeting_myrole =$('#txt_tr2').val();
	project_name = $('#txt_projectno').val();
	no_of_fmbs = $('#txt_fmbsno').val();
	designation_of_officers =$('#txt_desig').val();
	othersfield =$('#txt_others').val();
	remarks =$('#txtjob').val();
	uname = user_uname;


	
	

	book={
		date_time: date_data,
        ro_id: ro_id,
        user_id: user_id,
        user_name: user_name,
        user_role: user_role,
        dist_code: dist_code,
        taluk_code: taluk_code,
        vill_code: vill_code,
        survey_no: survey_no,
        file_no: file_no,
        nature_of_work: nature_of_work,
        application_no: application_no,
        area_extent: area_extent,
        no_of_subdivisions: no_of_subdivisions,
        no_of_plots: no_of_plots,
        user_leaves: user_leaves,
        no_of_errors: no_of_errors,
        user_holidays: user_holidays,
        meeting_name: meeting_name,
        meeting_place: meeting_place,
		meeting_myrole: meeting_myrole,
		no_of_fmbs:no_of_fmbs,
		name_of_the_project:project_name,
		designation_of_officers:designation_of_officers,
        othersfield: othersfield,
        remarks: remarks,
        uname: uname
	};
	
	//console.log(book);
	 var bookJSON = JSON.stringify(book);
	 //console.log(bookJSON);
	 $.ajax({
		url: 'https://bhunaksha.ap.gov.in/REST/insertTourDairyDetails',
		method: 'POST',
		data: bookJSON,
		contentType: "application/json; charset=utf-8",
		success: function () {
			alert('Saved successfully!');
		   // alert(data);
		},
		error: function (error) {
			console.log(error);
		}
	});
	
	}

