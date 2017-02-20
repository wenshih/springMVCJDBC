<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Dashboard Page</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/jquery.dataTables.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/jquery.dataTables.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/dashboard.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/header.js" />"></script>
</head>
<%@ page isELIgnored="false"%>
<body>
	<div class="center">
		<ul class="nav nav-pills">
			<li><h5>Hello ${name}.</h5></li>
			<c:import url="header.jsp"></c:import>
		</ul>
	</div>
	<br>
	<div id="admin">
		<div class="dashboardHor">
			<div class="dashboardHead">Management</div>
			<div class="dashboardBody">
				<div>
					<ul>
						<li id="dashUser" class="dashboardLi"><a href="#">User Account</a></li>
						<li id="dashAdmin" class="dashboardLi"><a href="#">Admin Account</a></li>
						<li id="dashPermission" class="dashboardLi"><a href="#">Permission</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="dashboardHor">
			<div class="dashboardHead">Personal</div>
			<div class="dashboardBody">
				<div>
					<ul>
						<li id="dashProfle" class="dashboardLi"><a href="#">Profile</a></li>
					</ul>
					<ul>
						<li id="dashStock" class="dashboardLi"><a href="#">Stock</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="user">
		<div class="dashboardHor">
			<div class="dashboardHead">Personal</div>
			<div class="dashboardBody">
				<div>
					<ul>
						<li id="userDashProfle" class="dashboardLi"><a href="#">Profile</a></li>
					</ul>
					<ul>
						<li id="userDashStock" class="dashboardLi"><a href="#">Stock</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>
</html>