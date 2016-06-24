<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>     
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>registered</title>
 <script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
 <script src="<c:url value="/resources/theme/js/registered.js" />"></script>
</head>
<body>
	<div>
		<label>Name</label>
		<div>
			<input id="name" type="text">
		</div>
	</div>
	<div>
		<label>Password</label>
		<div>
			<input id="pwd" type="password">
		</div>
	</div>
	<div>
		<label>Email</label>
		<div>
			<input id="mail" type="email">
			<img id="check" src="<c:url value="/resources/theme/image/check.png" />" style="display: none;" width="20" height="20"/>
			<img id="error" src="<c:url value="/resources/theme/image/error.png" />" style="display: none;" width="10" height="10"/>
			<button id="checkMail" onclick="checkMail()">Check mail</button>
		</div>
	</div>
	<div>
		<button id="apply" onclick="save()">Apply</button>
		<button id="return" onclick="returnPage()">Return</button>
	</div>
</body>
</html>