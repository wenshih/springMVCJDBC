<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Admin Page</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/jquery.dataTables.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<%-- <link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/userdiv.css" />"/> --%>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/jquery.dataTables.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/admin/dashboard.js" />"></script>
</head>
<%@ page isELIgnored="false"%>
<body>
	<h2>Hello ${name}.</h2>
	<div>
		<table id="userTable" class="display" cellspacing="0" width="100%">
			<thead>
				<tr>
					<th>Name</th>
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
	<!-- Modal -->
	<div id="myModal" class="modal fade" role="dialog">
	  <div class="modal-dialog">
	    <!-- Modal content-->
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">User Profile</h4>
	      </div>
	      <div class="modal-body">
	        <div class="row">
	        	<label class="col-sm-3 control-label">Name</label>
	        	<div class="col-sm-8">
			       <input type="text" id="name">
			       <label id="id" style="visibility:hidden"></label>
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Password</label>
	        	<div class="col-sm-8">
	        		<input type="password" id="pwd">
	        	</div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Email</label>
	        	<div class="col-sm-8">
	        		<label id=mail></label>
	        	</div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Role</label>
	        	<div class="col-sm-8">
	        		<label id=role></label>
	        	</div>
	        </div>
	      </div>
	      <div class="modal-footer">
	      	<button id="saveBtn" type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	
	  </div>
	</div>
</body>
</html>