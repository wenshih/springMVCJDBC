<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>     
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Profile</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
 <script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
 <script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
 <script src="<c:url value="/resources/theme/js/profile.js" />"></script>
 <script type="text/javascript" src="<c:url value="/resources/theme/js/header.js" />"></script>
</head>
<body>
	<div>
		<ul class="nav nav-pills">
			<li><h5 id="greeting">Hello ${name}.</h5></li>
			<!-- 
			<li id="dashboard" role="presentation"><a href="#">Dashboard</a></li>
			<li id="userAccount" role="presentation"><a href="#">User Account</a></li>
			<li id="adminAccount" role="presentation"><a href="#">Admin Account</a></li>
			<li id="permission" role="presentation"><a href="#">Permission</a></li>
		    <li id="profile" role="presentation" class="active"><a href="#">Profile</a></li>
		    <li id="logOut" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/">Log Out</a></li>
		     -->
		     <c:import url="header.jsp"></c:import>
		</ul>
	</div>
	<br>
	<div class="center">
		<div>
			<label class="labelDoubl1">Name</label>
			<label id="name" class="labelDoubl2"></label>
		</div>
		<div>
			<label class="labelDiv">Password</label>
			<input id="pwd" type="password" class="inputDiv">
		</div>
		<div>
			<label class="labelDiv3">Confirm Password</label>
			<input id="comPwd" type="password" class="inputDiv3">
			<span class="spanDiv2">
				<img id="checkPwd" src="<c:url value="/resources/theme/image/check.png" />" style="display: none;" width="20" height="20"/>
				<img id="errorPwd" src="<c:url value="/resources/theme/image/error.png" />" style="display: none;" width="10" height="10"/>
				<label id="id" style="visibility:hidden"></label>
			</span>
		</div>
		<div>
			<label class="labelDiv">Email</label>
			<label id="mail" class="inputDiv"></label>
		</div>
	</div>
	<br>
	<div class="center">
		<button type="button" id="update" class="btn btn-primary" onclick="update()">Update</button>
		<button type="button" id="clear" class="btn btn-default" onclick="clear()">Clear</button>
	</div>
</body>
</html>