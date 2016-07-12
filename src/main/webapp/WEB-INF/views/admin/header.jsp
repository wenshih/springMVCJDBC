<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Header Page</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/jquery.dataTables.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap-select.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/jquery.dataTables.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap-select.min.js" />"></script>
<%-- <script type="text/javascript" src="<c:url value="/resources/theme/js/admin/header.js" />"></script> --%>
</head>
<body>
	<ul id="header" class="nav nav-pills">
		<li id="account" role="presentation"><a href="#">Account Management</a></li>
		<li id="adminAccount" role="presentation"><a href="#">Admin Account</a></li>
	    <li id="permission" role="presentation"><a href="#">Permission</a></li>
	    <li id="profile" role="presentation"><a href="#">Profile</a></li>
	    <li id="logOut" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/">Log Out</a></li>
	</ul>
</body>
</html>