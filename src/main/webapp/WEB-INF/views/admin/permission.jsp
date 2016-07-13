<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Permission</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/css/common.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/jquery.dataTables.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap.min.css" />"/>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/theme/plugin/bootstrap-select.min.css" />"/>
<script src="<c:url value="/resources/theme/plugin/jquery-1.12.3.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/jquery.dataTables.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/theme/plugin/bootstrap-select.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/admin/permission.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/theme/js/header.js" />"></script>
</head>
<body>
	<div class="center">
		<ul class="nav nav-pills">
			<li><h5 id="greeting">Hello ${name}.</h5></li>
			<c:import url="../header.jsp"></c:import>
		</ul>
	</div>
	<br>
	<div>
		<button id="addBtn" type="button" class="btn btn-success btn-sm add" data-toggle="modal" data-target="#myModalAdd">Add Permission</button>
	</div>
	<br>
	<div>
		<!-- <input name="report_1" type="checkbox" onclick="checkBoxAllItemSelected(this, 'report_1')">全選 -->
		<table id="permissionTable" class="display" cellspacing="0" width="100%">
			<thead>
				<tr>
					<th>Permission</th>
					<th>Page</th>
					<th>Role</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody id="permissionTbody">
				<!-- 動態產生寫在js -->
			</tbody>
		</table>
	</div>
	
	<!-- Modal -->
	<div id="myModalAdd" class="modal fade" role="dialog">
	  <div class="modal-dialog modal-lg">
	    <!-- Modal content-->
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">Add Permission</h4>
	      </div>
	      <div class="modal-body">
	        <div class="row">
	        	<label class="col-sm-3 control-label">Page</label>
	        	<div class="col-sm-8">
			       <input type="text" id="pageAdd">
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Permission</label>
			    <div class="col-sm-8">
			    	<!-- <input type="text" id="permissionAdd"> -->
			    	<label class="radio-inline"><input type="radio" name="permissionAdd" value="0" checked>Enable</label>
					<label class="radio-inline"><input type="radio" name="permissionAdd" value="1">Disabled</label>
				</div>
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Role</label>
	        	<div class="col-sm-8">
	        		<!-- 
	        		<select name="selAdd" class="selectpicker" data-width="100px">
	        			<option value="1">Admin</option>
					    <option value="2">User</option>
					</select>
					 -->
					 <select class="selectpickerAdd" data-width="100px">
	        			<option value="1">Admin</option>
					    <option value="2">User</option>
					</select>
	        	</div>
	        </div>
	      </div>
	      <div class="modal-footer">
	      	<button type="button" id="apply" class="btn btn-primary">Apply</button>
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
	
	<!-- Modal -->
	<div id="myModalUpdate" class="modal fade" role="dialog">
	  <div class="modal-dialog modal-lg">
	    <!-- Modal content-->
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">Update Permission</h4>
	      </div>
	      <div class="modal-body">
	        <div class="row">
	        	<label class="col-sm-3 control-label">Page</label>
	        	<div class="col-sm-8">
			       <input type="text" id="pageUpd">
			       <label id="id" style="visibility:hidden"></label>
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Permission</label>
			    <div class="col-sm-8">
			    	<label class="radio-inline"><input type="radio" name="permissionUpd" value="0">Enable</label>
					<label class="radio-inline"><input type="radio" name="permissionUpd" value="1">Disabled</label>
				</div>
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Role</label>
	        	<div class="col-sm-8">
	        		<!-- 
	        		<select name="selValue" class="selectpicker selectpickerUpd" data-width="100px">
	        			<option value="1">Admin</option>
					    <option value="2">User</option>
					</select>
					 -->
					 <select name="selValue" class="selectpickerUpd" data-width="100px">
	        			<option value="1">Admin</option>
					    <option value="2">User</option>
					</select>
	        	</div>
	        </div>
	      </div>
	      <div class="modal-footer">
	      	<button type="button" id="update" class="btn btn-primary">Update</button>
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
	        <h4 class="modal-title">Delete Page</h4>
	      </div>
	      <div class="modal-body">
	        <div class="row">
	        	<label class="col-sm-10 control-label">Are you sure you want to delete this page</label>
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Page</label>
	        	<div class="col-sm-8">
			       <label id="pageLabel"></label>
			       <label id="idLabel" style="visibility:hidden"></label>
			    </div>	
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Permission</label>
			    <div class="col-sm-8">
			    	<label class="radio-inline"><input type="radio" name="permissionDel" value="0">Enable</label>
					<label class="radio-inline"><input type="radio" name="permissionDel" value="1">Disabled</label>
				</div>
	        </div>
	        <div class="row">
	        	<label class="col-sm-3 control-label">Role</label>
	        	<div class="col-sm-8">
	        		<label id="roleLabel"></label>
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
	
</body>
</html>