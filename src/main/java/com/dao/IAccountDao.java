package com.dao;

import com.model.Account;

public interface IAccountDao {
	
	public void insert(Account account) throws Throwable;
	
	public Account checkMail(String mail) throws Throwable;
	
	public Account login(Account account) throws Throwable;
}
