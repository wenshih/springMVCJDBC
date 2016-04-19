package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloWorldController {
	
	//http://localhost:8080/SpringMVCJDBC/
	@RequestMapping(value = { "/", "/welcome" }, method = RequestMethod.GET)
    public String welcomePage(Model model) {
		model.addAttribute("title", "Welcome");
		model.addAttribute("message", "This is welcome page!");
		return "welcomePage";
    }
	
	@RequestMapping("/hello")
	public ModelAndView welcomeMessage(@RequestParam(value = "name", required = false) String name) {
		// Name of your jsp file as parameter
		ModelAndView view = new ModelAndView("hello");
		view.addObject("name", name);
		return view;
	}
	
	@RequestMapping("/registered")
	public String registeredPage() {
		// Name of your jsp file as parameter
		ModelAndView view = new ModelAndView("registered");
		return "registered";
	}
	
	@RequestMapping("/login")
	public String loginPage() {
		// Name of your jsp file as parameter
		ModelAndView view = new ModelAndView("login");
		return "login";
	}
	
	@RequestMapping("/dashboard")
	public String adminDashboardPage() {
		// Name of your jsp file as parameter
		ModelAndView view = new ModelAndView("dashboard");
		return "admin/dashboard";
	}
}
