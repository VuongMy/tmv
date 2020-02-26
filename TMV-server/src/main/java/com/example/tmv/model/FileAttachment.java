package com.example.tmv.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CascadeType;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.tmv.dto.FileAttachmentDTO;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Document
public class FileAttachment implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5974477228975175184L;
	
	@Id
	private String id;
	private String fileName;
	private String storeName;
	private Long size;	
	private String url;
	private String type;
	private String fileExt;
	private User user;
	private Date createdDate;

	public Date getCreatedDate() {
		return createdDate;
	}

	public String getFileExt() {
		return fileExt;
	}

	public String getFileName() {
		return fileName;
	}

	public String getId() {
		return id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Long getSize() {
		return size;
	}

	public String getStoreName() {
		return storeName;
	}

	public String getType() {
		return type;
	}

	public User getUser() {
		return user;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public void setFileExt(String fileExt) {
		this.fileExt = fileExt;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setSize(Long size) {
		this.size = size;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public FileAttachment() {}
	
	public FileAttachment(FileAttachmentDTO FileAttachmentDTO) {
		this.fileName = FileAttachmentDTO.getFileName();
		this.storeName = FileAttachmentDTO.getStoreName();
		this.size = FileAttachmentDTO.getSize();
		this.fileExt = FileAttachmentDTO.getFileExt();
		this.createdDate = FileAttachmentDTO.getCreatedDate();
	}

	public FileAttachment(String id, String fileName, String storeName, Long size, String type, String fileExt, User user,
			Date createdDate) {
		super();
		this.id = id;
		this.fileName = fileName;
		this.storeName = storeName;
		this.size = size;
		this.type = type;
		this.fileExt = fileExt;
		this.user = user;
		this.createdDate = createdDate;
	}
	
	

}
