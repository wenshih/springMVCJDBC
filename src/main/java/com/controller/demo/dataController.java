package com.controller.demo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class dataController {
	
	public static void main(String[] args) throws ParseException {
		
		//SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss.SSS");
		SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date current = new Date();
		System.out.println(sdFormat.format(current));
		String[] dateStr = (sdFormat.format(current)).split(" ");
		System.out.println(dateStr[0].replace("/", ""));
		System.out.println(dateStr[1].replace(":", ""));
	}
	
	
}
