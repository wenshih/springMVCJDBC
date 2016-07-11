package com.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import com.dao.IPermissionDao;
import com.model.Permission;

public class PermissionDaoImpl implements IPermissionDao{

	private DataSource dataSource;
	
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	public List<Permission> getPermission() throws Throwable {
		
		String sql = "SELECT * FROM STOCK.PERMISSION;";
		Connection conn = null;
		List<Permission> permissionList = new ArrayList();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				Permission permission = new Permission();
				permission.setId(rs.getInt("id"));
				permission.setPage(rs.getString("page"));
				permission.setPermission(rs.getInt("permission"));
				permission.setRole_id(rs.getInt("role_id"));
				permissionList.add(permission);
			}
			
			ps.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
			
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {}
			}
		}
		return permissionList;
	}

	public void insertPermission(Permission permission) throws Throwable {
		
		String sql = "INSERT INTO PERMISSION (ID, PAGE, PERMISSION, ROLE_ID) VALUES (?, ?, ?, ?)";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			
			ps.setInt(1, permission.getId());
			ps.setString(2, permission.getPage());
			ps.setInt(3, permission.getPermission());
			ps.setInt(4, permission.getRole_id());
			ps.executeUpdate();
			ps.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
			
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {}
			}
		}
	}

	public Permission updatePage(Permission permission) throws Throwable {
		
		String sql = "UPDATE STOCK.PERMISSION SET PAGE = ?, PERMISSION=?, ROLE_ID=? WHERE ID = ?;";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, permission.getPage());
			ps.setInt(2, permission.getPermission());
			ps.setInt(3, permission.getRole_id());
			ps.setInt(4, permission.getId());
			ps.executeUpdate();
			ps.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
			
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {}
			}
		}
		return permission;
	}

	public Permission deletePage(int id) throws Throwable {
		
		Permission permission = new Permission();
		String sql = "DELETE FROM STOCK.PERMISSION WHERE ID = '"+id+"';";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.executeUpdate();
			ps.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
			
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {}
			}
		}
		
		return permission;
	}

}
