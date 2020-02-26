package com.example.tmv.model;

import java.util.Date;

public class Image {
	String id;
	String url;
	
	public Image() {
		
	}
	
	public void init() {
		id = (new Date()).getTime()+"";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
}
