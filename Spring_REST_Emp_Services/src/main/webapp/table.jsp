<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false" %> 
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
    
    
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script>
    
$(document).ready(function(){
    $("button").click(function(){

 $.ajax({
  type: 'POST',
  url: "http://localhost:8080/Spring_REST/create",
  data: {
      "empno": 4449,
      "ename": "RAMESH",
      "job": "DEVELOPER",
      "mgr": 6543,
      "hiredate": "2019-12-18",
      "sal": 20000,
      "comm": 0,
      "deptno": 40
  },
 contentType: "application/json; charset=utf-8",
  success: function(){
      console.log("successfully inserted");
  },
  dataType: 'json',
  headers: {"X-CSRF-TOKEN": $("meta[name='_csrf']").attr("content")}
}); 
   
  });

});
</script>
</head>
<body>

  
  <form action="<%=request.getContextPath() %>/create" method="POST">

            <button>Send an HTTP POST request to a page and get the result back</button>

        </form>



</body>
</html>

    