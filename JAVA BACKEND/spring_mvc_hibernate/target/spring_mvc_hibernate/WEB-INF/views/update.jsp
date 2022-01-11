<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<html>
<head>
<title>Update</title>
</head>
<body>

	<h3>Update User</h3>
	 
	<form method="POST" action="/spring_mvc_hibernate/updateuser">
		<table cellpadding="2" cellspacing="2">
		
			<tr>UserID:  ${id} </tr>
			<tr>
				<td>UserName :<input type="text" name="userName" value="${userName}"></td>
			</tr>
			<tr>
				<td>UserAge :<input type="text" name="userAge" value="${userAge}"></td>
			</tr>
				
			<input type="hidden" name="id" value="${id}" />
		</table>
		<input type="submit" value="Save">
	</form>

</body>
</html>


