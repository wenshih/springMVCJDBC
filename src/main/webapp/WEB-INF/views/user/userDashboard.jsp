<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert Page</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/jquery.dataTables.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/jquery.dataTables.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/user/userDashboard.js" />"></script>
</head>
<%@ page isELIgnored="false"%>
<body>
	<div class="center">
		<ul class="nav nav-pills">
			<li><h5>Hello ${name}.</h5></li>
			<li id="profile" role="presentation" class="active"><a href="#">Profile</a></li>
		    <li id="logOut" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/">Log Out</a></li>
		</ul>
	</div>
	<br>
</body>
</html>