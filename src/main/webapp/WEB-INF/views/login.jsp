<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>login</title>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.2.min.js" />"></script>
<script src="<c:url value="/resources/theme/js/login.js" /> "></script>
</head>
<body>
	<div id="loginDiv">
   		<div>
			<label>Password</label>
			<div>
				<input id="pwd" type="text">
			</div>
		</div>
		<div>
			<label>Email</label>
			<div>
				<input id="mail" type="email">
			</div>
		</div>
   	</div>
   	<div>
   		<button id="login" onclick="login()">Login</button>
		<button id="return" onclick="returnPage()">Return</button>
   	</div>
</body>
</html>