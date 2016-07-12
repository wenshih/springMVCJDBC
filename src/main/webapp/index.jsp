<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Index Page</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/index.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/commonfunc/browser.js" />"></script>

</head>
<%@ page isELIgnored="false"%>
<body>
	<div>
		<ul class="nav nav-pills">
			<li id="home" role="presentation" class="active"><a href="#">Home</a></li>
		    <li id="login" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/login">Login</a></li>
		    <li id="registered" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/registered">Registered</a></li>
		</ul>
	</div>
	<!-- <h2>Hello World</h2> -->
   	<!-- <h3><a href="hello?name=Sally">Click here...</a></h3> -->
   	<!-- 
   	<div id="divBlock" class="center" style="display:none">
   		<a href="registered">Registered</a> or
   		<a href="login">Login</a>
   	</div>
   	 -->
</body>
</html>
