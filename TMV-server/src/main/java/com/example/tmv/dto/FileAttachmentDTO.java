package com.example.tmv.dto;

import java.io.Serializable;
import java.util.Date;

import com.example.tmv.model.User;

public class FileAttachmentDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2580294626601375565L;

	private String id;

	private String fileName;

	private String storeName;

	private Long size;

	private String type;

	private String fileExt;
	
	private String url;

//	private User user;

	private Date createdDate;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public Long getSize() {
		return size;
	}

	public void setSize(Long size) {
		this.size = size;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFileExt() {
		return fileExt;
	}

	public void setFileExt(String fileExt) {
		this.fileExt = fileExt;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

}
