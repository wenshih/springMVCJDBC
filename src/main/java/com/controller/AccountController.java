package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dao.IAccountDao;
import com.model.Account;

@Controller
public class AccountController {

	@Autowired
	private IAccountDao accountDao;
	//http://localhost:8080/SpringMVCJDBC/
	
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	public Account insert(String name, String pwd){
		Account account = new Account();
		account.setId("2");
		account.setName("Wen");
		account.setPwd("123");
		accountDao.insert(account);
		return account;
		
	}
}
