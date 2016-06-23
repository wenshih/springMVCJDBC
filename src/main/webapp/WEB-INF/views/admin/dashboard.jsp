<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Admin Page</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/jquery.dataTables.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/jquery.dataTables.min.js" />"></script>
<script src="<c:url value="/resources/theme/js/admin/dashboard.js" />"></script>
</head>
<%@ page isELIgnored="false"%>
<body>
	<h2>Hello ${name}.</h2>
	<div>
		<table id="userTable" class="display" cellspacing="0" width="100%">
			<thead>
				<tr>
					<th>Name</th>
					<th>Password</th>
					<th>Email</th>
					<th>Role</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody id="userTbody">
				<!-- 動態產生寫在js -->
			</tbody>
		</table>
	</div>
</body>
</html>