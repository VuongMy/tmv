package com.example.tmv.model;

import java.util.List;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class DoctorsTeam {
	@Id
	String id;
	String intro;
	List<Doctor> doctorList;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public List<Doctor> getDoctorList() {
		return doctorList;
	}
	public void setDoctorList(List<Doctor> doctorList) {
		this.doctorList = doctorList;
	}
	
	
}
