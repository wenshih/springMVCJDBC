<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>login</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/theme/js/login.js" /> "></script>
</head>
<body>
	<div>
		<ul class="nav nav-pills">
			<li id="home" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/">Home</a></li>
		    <li id="login" role="presentation" class="active"><a href="#">Login</a></li>
		    <li id="registered" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/registered">Registered</a></li>
		</ul>
	</div>
	<br>
	<div id="loginDiv" class="center">
		<div>
			<label class="labelDiv">Password</label>
			<input id="pwd" type="password" class="inputDiv">
		</div>
		<div>
			<label class="labelDiv">Email</label>
			<input id="mail" type="email" class="inputDiv">
		</div>
   	</div>
   	<br>
   	<div class="center">
		<button type="button" id="login" class="btn btn-success" onclick="login()">Login</button>
		<!-- <button type="button" id="return" class="btn btn-info" onclick="returnPage()">Return</button> -->
		<button type="button" id="clear" class="btn btn-default" onclick="clear()">Clear</button>
   	</div>
</body>
</html>