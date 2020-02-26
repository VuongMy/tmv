package com.example.tmv.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.example.tmv.model.AuthProvider;
import com.example.tmv.model.FileAttachment;
import com.example.tmv.model.Role;
import com.example.tmv.model.UserActive;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDTO implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3078677143877640314L;

	private Long id;

	private FileAttachmentDTO avatar;

	private String username;

	private String name;

	private String email;
	
	private AuthProvider provider;

	public AuthProvider getProvider() {
		return provider;
	}

	public void setProvider(AuthProvider provider) {
		this.provider = provider;
	}

	public FileAttachmentDTO getAvatar() {
		return avatar;
	}

	public String getEmail() {
		return email;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getUsername() {
		return username;
	}

	public void setAvatar(FileAttachmentDTO avatar) {
		this.avatar = avatar;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
