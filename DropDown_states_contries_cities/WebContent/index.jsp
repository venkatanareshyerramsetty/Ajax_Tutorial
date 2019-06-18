<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false" %>
    <%@page import="java.sql.*"%>

<html>
      <head> 
            <script type="text/javascript"> 
            var xmlHttp;
            var xmlHttp;
            function showState(str){
                  if (typeof XMLHttpRequest != "undefined"){
                  xmlHttp= new XMLHttpRequest();
            }
            else if(window.ActiveXObject){
                     xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (xmlHttp==null){
                  alert("Browser does not support XMLHTTP Request")
                  return;
            }
            var url="state.jsp";
            url +="?count=" +str;
            xmlHttp.onreadystatechange = stateChange;
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
            }
     
            function stateChange()
            	{  
                  if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {  
                  document.getElementById("state").innerHTML=xmlHttp.responseText   
                  }  
                }
           
            function showCity(str){
            if (typeof XMLHttpRequest != "undefined"){
              xmlHttp= new XMLHttpRequest();
              }
            else if(window.ActiveXObject){
              xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
              }
            if (xmlHttp==null){
            alert("Browser does not support XMLHTTP Request")
            return;
            }
                  var url="city.jsp";
                  url +="?count=" +str;
                  xmlHttp.onreadystatechange = stateChange1;
                  xmlHttp.open("GET", url, true);
                  xmlHttp.send(null);
            }
            function stateChange1()
            {  
                  if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){  
                        document.getElementById("city").innerHTML=xmlHttp.responseText   
                  }  
            }
            
            </script> 
      </head>
      
      <link rel="stylesheet" href="country.css"> 
      <body> 
      <br/>
      <div id="country_div">
      Country : <select name='country'onchange="showState(this.value)" id="country"> 
       <option value="none">Select Country</option> 
          <%
                  Class.forName("com.mysql.jdbc.Driver").newInstance(); 
                  Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/service","root","root"); 
                  Statement stmt = con.createStatement(); 
                  ResultSet rs = stmt.executeQuery("Select * from country");
                  while(rs.next()){
            %>
                  <option value="<%=rs.getString(1)%>"><%=rs.getString(2)%></option> 
            <%
                  }
            %>
      </select > 
      </div>
      
      <div id='state'> 
            State :  <select name='state' id='state_css' > 
                  <option value='-1'>Select State</option> 
            </select> 
      </div> 

      <div id='city'> 
           City : <select name='city' id='city_css' > 
                  <option value='-1'>Select District</option> 
            </select> 
      </div>
      </body>
</html>