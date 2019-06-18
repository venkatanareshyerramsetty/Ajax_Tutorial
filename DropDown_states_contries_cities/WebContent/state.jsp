<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@page import="java.sql.*"%>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>



<%
      String country=request.getParameter("count"); 
      String buffer="State : <select id='state_css' name='state' onchange='showCity(this.value);'><option value='-1' >Select</option>"; 
      try{
            Class.forName("com.mysql.jdbc.Driver").newInstance(); 
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/service","root","root"); 
            Statement stmt = con.createStatement(); 
            ResultSet rs = stmt.executeQuery("Select * from state where countryid='"+country+"' "); 
            while(rs.next()){
            buffer=buffer+"<option value='"+rs.getString(1)+"'>"+rs.getString(3)+"</option>"; 
            } 
            buffer=buffer+"</select>"; 
            response.getWriter().println(buffer);
      }
      catch(Exception e){
            System.out.println(e);
      }
%>



</body>
</html>