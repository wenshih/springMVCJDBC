package com.model;

public class Stock {

	private String stockId;
	private String stockName;
	
	
	public String getStockId() {
		return stockId;
	}


	public void setStockId(String stockId) {
		this.stockId = stockId;
	}


	public String getStockName() {
		return stockName;
	}


	public void setStockName(String stockName) {
		this.stockName = stockName;
	}


	@Override
    public String toString(){
        return "{stockId="+stockId+",stockName="+stockName+"}";
    }
}
