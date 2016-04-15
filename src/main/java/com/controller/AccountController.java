package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.IAccountDao;
import com.model.Account;

@Controller
public class AccountController {

	@Autowired
	private IAccountDao accountDao;
	/*
	@Autowired
	private IAccountService accountService;
	*/
	//http://localhost:8080/SpringMVCJDBC/
	/*
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	public Account insert(String name, String pwd){
		Account account = new Account();
		account.setId("2");
		account.setName("Wen");
		account.setPwd("123");
		accountDao.insert(account);
		return account;
	}
	*/
	@RequestMapping(value="/insert", method = RequestMethod.POST)
	//The “json data” will be converted into this object, via @RequestBody.
	public Account insert(@RequestBody Account account) {
			try {
				if(!"".equals(account.getName()) && !"".equals(account.getPwd()) && !"".equals(account.getPwd())){
					accountDao.insert(account);
				}
			} catch (Throwable e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		return account;
    }
	
	@RequestMapping(value="/checkMail", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	//The “json data” will be converted into this object, via @RequestBody.
	@ResponseBody
	public Account checkMail(@RequestBody String mail) {
		//Boolean check = true;
		Account account = new Account();
		System.out.println(mail);
		try {
			account = accountDao.checkMail(mail);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return account;
		
    }
}
