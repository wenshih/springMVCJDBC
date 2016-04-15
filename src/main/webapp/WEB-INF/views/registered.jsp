<%@ page language="java" contentType="text/html; charset=US-ASCII" pageEncoding="US-ASCII"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>     
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
<title>registered</title>
 <script src="<c:url value="/resources/theme/plugin/jquery-1.12.2.min.js" />"></script>
 <script src="<c:url value="/resources/theme/js/registered.js" />"></script>
</head>
<body>
	<!-- 
	<div>
		<label>ID</label>
		<div>
			<input id="pId" type="text">
		</div>
	</div>
	 -->
	<div>
		<label>Name</label>
		<div>
			<input id="name" type="text">
		</div>
	</div>
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
			<button id="checkMail" onclick="checkMail()">Check mail</button>
		</div>
	</div>
	<div>
		<button id="apply" onclick="save()">Apply</button>
		<button id="return" onclick="returnPage()">Return</button>
	</div>
</body>
</html>