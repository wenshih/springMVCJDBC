package com.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

import com.dao.IAccountDao;
import com.model.Account;

public class AccountDaoImpl implements IAccountDao{

	private DataSource dataSource;
	
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}
		 
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
		
	public void insert(Account account) {
		
		String sql = "INSERT INTO account (id, name, pwd, mail) VALUES (?, ?, ?, ?)";
		Connection conn = null;
		
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			
			ps.setInt(1, account.getId());
			ps.setString(2, account.getName());
			ps.setString(3, account.getPwd());
			ps.setString(4, account.getMail());
			
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

	public Account checkMail(String mail) throws Throwable {
		
		Account account = new Account();
		String sql = "SELECT * FROM STOCK.ACCOUNT WHERE MAIL='"+mail+"'";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			String mailStr = null;
			if(rs.next()){
				mailStr = rs.getString("mail");
			}
			account.setMail(mailStr);
			
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
		
		return account;
	}

	public Account login(Account account) throws Throwable {
		
		String sql = "SELECT * FROM STOCK.ACCOUNT WHERE MAIL='"+account.getMail()+"' AND PWD='"+account.getPwd()+"'";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			String mailStr = null;
			String pwdStr = null;
			String nameStr = null;
			if(rs.next()){
				mailStr = rs.getString("mail");
				pwdStr = rs.getString("pwd");
				nameStr = rs.getString("name");
			}
			account.setMail(mailStr);
			account.setPwd(pwdStr);
			account.setName(nameStr);
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
		
		return account;
		
	}
		

}
