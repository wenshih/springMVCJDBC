<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Admin Page</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/jquery.dataTables.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap-select.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/jquery.dataTables.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap-select.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/admin/dashboard.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/admin/header.js" />"></script>
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
	<div>
		<button id="addBtn" type="button" class="btn btn-success btn-sm add" data-toggle="modal" data-target="#myModalAdd">Add User</button>
		<!-- <button type="button" class="btn btn-default btn-sm">
		  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
		</button> -->
	</div>
	<br>
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
	
	<!-- Modal -->
	<div id="myModalDelete" class="modal fade" role="dialog">
	  <div class="modal-dialog">
	    <!-- Modal content-->
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">Delete User</h4>
	      </div>
	      <div class="modal-body">
	        <div class="row">
	        	<label class="col-sm-10 control-label">Are you sure you want to delete this user</label>
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Name</label>
	        	<div class="col-sm-8">
			       <label id=nameLabel></label>
			       <label id="idLabel" style="visibility:hidden"></label>
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Email</label>
	        	<div class="col-sm-8">
	        		<label id=mailLabel></label>
	        	</div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Role</label>
	        	<div class="col-sm-8">
	        		<label id=roleLabel></label>
	        	</div>
	        </div>
	      </div>
	      <div class="modal-footer">
	      	<button id="deleteBtn" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
	
	<!-- Modal -->
	<div id="myModalAdd" class="modal fade" role="dialog">
	  <div class="modal-dialog modal-lg">
	    <!-- Modal content-->
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">Add User</h4>
	      </div>
	      <div class="modal-body">
	        <div class="row">
	        	<label class="col-sm-3 control-label">Name</label>
	        	<div class="col-sm-8">
			       <input type="text" id="nameAdd">
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Password</label>
	        	<div class="col-sm-8">
			       <input type="password" id="pwdAdd">
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Confirm Password</label>
	        	<div class="col-sm-8">
			       <input type="password" id="comPwd">
			       <img id="checkPwd" src="<c:url value="/resources/theme/image/check.png" />" style="display: none;" width="20" height="20"/>
				   <img id="errorPwd" src="<c:url value="/resources/theme/image/error.png" />" style="display: none;" width="10" height="10"/>
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Email</label>
	        	<div class="col-sm-8">
	        		<input type="text" id="mailAdd">
	        		<span class="spanDiv2">
						<img id="check" src="<c:url value="/resources/theme/image/check.png" />" style="display: none;" width="20" height="20"/>
						<img id="error" src="<c:url value="/resources/theme/image/error.png" />" style="display: none;" width="10" height="10"/>
						<button type="button" id="checkMail" class="btn btn-info btn-xs" onclick="checkMail()">Check mail</button>
					</span>
	        	</div>
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Role</label>
	        	<div class="col-sm-8">
	        		<select class="selectpickerAddUser" data-width="100px">
	        			<option value="1">Admin</option>
					    <option value="2">User</option>
					</select>
	        	</div>
	        </div>
	      </div>
	      <div class="modal-footer">
	      	<button type="button" id="apply" class="btn btn-primary" onclick="save()">Apply</button>
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
	
</body>
</html>