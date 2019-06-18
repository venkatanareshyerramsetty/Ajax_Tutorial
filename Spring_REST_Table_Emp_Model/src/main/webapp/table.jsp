<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false" %> 
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
    
<!DOCTYPE html>
<html>
<head>
      <style>
         table, th, td {
            border: 1px solid black;
         }

         table {
                border-collapse: collapse;
                width: 100%;
                } 
                
                th{
                    height: 50px;
                    background-color: #4CAF50;
                    color: white;
                }
                td {
                    height: 10px;
                    vertical-align: bottom;
                    }

                    th, td {
                    padding: 15px;
                     text-align: left;
                            }

            tr:hover {
                background-color: rgba(141, 156, 155, 0.438);
                     }

                     h1{

                        text-align: center;
                        color: antiquewhite;
                        padding: 10px;
                        background-color: rgb(3, 72, 97);
                        margin-right: 450px;
                        margin-left: 450px;
                        border-radius: 20px;
                        box-shadow: black 10px;
                        
                     }

      </style>
   </head>

   <body>
      <h1>EMP-TABLE</h1>

      <div style="overflow-x:auto;">
      
      <table>
         <tr>
            <th>EMPNO</th>
            <th>ENAME</th>
            <th>JOB</th>
            <th>MGR</th>
            <th>HIREDATE</th>
            <th>SALARY</th>
            <th>COMM</th>
            <th>DEPTNO</th>
         </tr>
        
        
        <c:forEach items="${empList}" var="item">
   		 <tr>
      <td><c:out value="${item.empno}" /></td>
       <td><c:out value="${item.ename}"/></td>
        <td><c:out value="${item.job}" /></td>
       <td><c:out value="${item.mgr}"/></td>
        <td><c:out value="${item.hiredate}" /></td>
       <td><c:out value="${item.sal}"/></td>
        <td><c:out value="${item.comm}" /></td>
       <td><c:out value="${item.deptno}"/></td>
    	</tr>
 		 </c:forEach>

      </table>
    </div>
   </body>
</html>