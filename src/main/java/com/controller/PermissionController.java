package com.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.IPermissionDao;
import com.model.Permission;

@Controller
public class PermissionController {
	@Autowired
	private IPermissionDao permissionDao;
	
	@RequestMapping(value="/getPermission", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	//The “json data” will be converted into this object, via @RequestBody.
	@ResponseBody
	public List<Permission> getPermission() {
		
		List<Permission> permissionList = new ArrayList();
		try {
			permissionList = permissionDao.getPermission();
		} catch (Throwable e) {
			e.printStackTrace();
		}
		return permissionList;
    }
	
	@RequestMapping(value="/insertPermission", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Permission> insertPermission(@RequestBody Permission permission) {
		
		List<Permission> permissionL = new ArrayList();
		try {
			if(!"".equals(permission.getPage()) && !"".equals(permission.getPermission()) && !"".equals(permission.getRole_id())){
				permissionDao.insertPermission(permission);
				permissionL = this.getPermission();
			}
		} catch (Throwable e) {
			e.printStackTrace();
		}
		
		return permissionL;
    }
	
	@RequestMapping(value="/updatePage", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	//The “json data” will be converted into this object, via @RequestBody.
	@ResponseBody
	public Permission updatePage(@RequestBody Permission permission) {
		
		try {
			permission = permissionDao.updatePage(permission);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return permission;
    }
	
	@RequestMapping(value="/deletePage", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	//The “json data” will be converted into this object, via @RequestBody.
	@ResponseBody
	public Permission deletePage(@RequestBody int id) {
		Permission permission = new Permission();
		try {
			permission = permissionDao.deletePage(id);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return permission;
    }
}
