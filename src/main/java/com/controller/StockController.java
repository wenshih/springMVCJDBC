package com.controller;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.nodes.Element;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.abola.crawler.CrawlerPack;
import com.model.Stock;

@Controller
public class StockController {
	
	@RequestMapping(value="/getStock", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<String> getStock(@RequestBody Stock stock) throws Exception{
		
		List<String> key = new ArrayList<String>();
		
		String uri = "https://tw.stock.yahoo.com/q/q?s="+ stock.getStockId();
		
		Element  table;
		//標頭
        table = CrawlerPack.start().setRemoteEncoding("big5").getFromHtml(uri).select("center>table").get(1).select("table").get(0);
        //內容        
        table = CrawlerPack.start().setRemoteEncoding("big5").getFromHtml(uri).select("center>table").get(1).select("table").get(1);
		
        System.out.println("--------------------------------------------------");
        
        for(int i=0; i<table.getElementsByTag("th").size();i++){
        	if(table.getElementsByTag("th").eq(i).hasAttr("align")){
	        	key.add(table.getElementsByTag("th").eq(i).text());
	        }
        	if(table.getElementsByTag("td").eq(i).hasAttr("align") && !table.getElementsByTag("td").eq(i).hasClass("tt")){
        		key.add(table.getElementsByTag("td").eq(i).text());
        	}
        }
        System.out.println(key);
        return key;
	}
	
	
	
}
