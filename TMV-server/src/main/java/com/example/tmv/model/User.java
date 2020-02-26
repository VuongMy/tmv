package com.example.tmv.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {

	@Id
	public String id;
	private FileAttachment avatar;
	private String username;
	private String gender;
	private AuthProvider loginType;
	private String birthday;
	private String phoneNumber;
	private String name;
	private UserActive active;
	private String email;
	private String imageUrl;
	private Boolean emailVerified = false;
	private String password;
	private AuthProvider provider;
	private String providerId;
	private Role role;
	private String token;
	private String firebaseToken;
	private String keyToken;
	private int numberOfError;
	private Date create_date;

	public UserActive getActive() {
		return active;
	}

	public FileAttachment getAvatar() {
		return avatar;
	}

	public String getBirthday() {
		return birthday;
	}

	public Date getCreate_date() {
		return create_date;
	}

	public String getEmail() {
		return email;
	}

	public Boolean getEmailVerified() {
		return emailVerified;
	}

	public String getFirebaseToken() {
		return firebaseToken;
	}

	public String getGender() {
		return gender;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public String getKeyToken() {
		return keyToken;
	}

	public AuthProvider getLoginType() {
		return loginType;
	}

	public String getName() {
		return name;
	}

	public int getNumberOfError() {
		return numberOfError;
	}

	public String getPassword() {
		return password;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public AuthProvider getProvider() {
		return provider;
	}

	public String getProviderId() {
		return providerId;
	}

	public Role getRole() {
		return role;
	}

	public String getToken() {
		return token;
	}

	public String getUsername() {
		return username;
	}

	public void setActive(UserActive active) {
		this.active = active;
	}

	public void setAvatar(FileAttachment avatar) {
		this.avatar = avatar;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setEmailVerified(Boolean emailVerified) {
		this.emailVerified = emailVerified;
	}

	public void setFirebaseToken(String firebaseToken) {
		this.firebaseToken = firebaseToken;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setKeyToken(String keyToken) {
		this.keyToken = keyToken;
	}

	public void setLoginType(AuthProvider loginType) {
		this.loginType = loginType;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setNumberOfError(int numberOfError) {
		this.numberOfError = numberOfError;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public void setProvider(AuthProvider provider) {
		this.provider = provider;
	}

	public void setProviderId(String providerId) {
		this.providerId = providerId;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
