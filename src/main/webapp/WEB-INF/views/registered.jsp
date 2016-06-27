<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>     
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>registered</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
 <script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
 <script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
 <script src="<c:url value="/resources/theme/js/registered.js" />"></script>
</head>
<body>
	<div>
		<ul class="nav nav-pills">
			<li id="home" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/">Home</a></li>
		    <li id="login" role="presentation"><a href="http://localhost:8080/SpringMVCJDBC/login">Login</a></li>
		    <li id="registered" role="presentation" class="active"><a href="#">Registered</a></li>
		</ul>
	</div>
	<br>
	<div class="center">
		<div>
			<label class="labelDiv">Name</label>
			<input id="name" type="text" class="inputDiv">
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
			</span>
		</div>
		<!-- style="border:10px solid yellowgreen;" -->
		<div>
			<label class="labelDiv2">Email</label>
			<input id="mail" type="email" class="inputDiv2">
			<span class="spanDiv2">
				<img id="check" src="<c:url value="/resources/theme/image/check.png" />" style="display: none;" width="20" height="20"/>
				<img id="error" src="<c:url value="/resources/theme/image/error.png" />" style="display: none;" width="10" height="10"/>
				<button type="button" id="checkMail" class="btn btn-info btn-xs" onclick="checkMail()">Check mail</button>
			</span>
		</div>
	</div>
	<br>
	<div class="center">
		<!-- <button id="apply" onclick="save()">Apply</button>
		<button id="return" onclick="returnPage()">Return</button> -->
		<button type="button" id="apply" class="btn btn-primary" onclick="save()">Apply</button>
		<button type="button" id="clear" class="btn btn-default" onclick="clear()">Clear</button>
	</div>
</body>
</html>