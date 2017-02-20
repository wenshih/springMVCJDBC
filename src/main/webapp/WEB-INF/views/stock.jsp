<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>     
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Stock</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
 <script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
 <script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
 <script src="<c:url value="/resources/theme/js/stock.js" />"></script>
 <script type="text/javascript" src="<c:url value="/resources/theme/js/header.js" />"></script>
</head>
<body>
	<div>
		<ul class="nav nav-pills">
			<li><h5 id="greeting">Hello ${name}.</h5></li>
		     <c:import url="header.jsp"></c:import>
		</ul>
	</div>
	<br>
	<div>
		<div>
			<label class="">Stock ID</label>
			<input id="stockId" type="text" class="">
			<button type="button" id="search" class="btn btn-info" onclick="search()">Search</button>
			<button type="button" id="clear" class="btn btn-default" onclick="clear()">Clear</button>
		</div>
		<br>
		<div>
			<table class="borderCss">
				 <thead>
					<tr id="sHeader"></tr>
				</thead>
				<tbody>
					<tr id="sContent"></tr>
				</tbody>
				<tfoot></tfoot>
			</table>
		</div>
	</div>
	<br>
	
</body>
</html>