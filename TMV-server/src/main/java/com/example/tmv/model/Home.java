package com.example.tmv.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Home {
	List<String> services;
	String servicesurl;
	String doctorUrl;
	String introduction;
	String teamOfDoctors;
	List<String> teamOfDoctorsUrl;
	String resultOfCustome;
	List<String> resultOfCustomeurl;
	
	public List<String> getServices() {
		return services;
	}
	public void setServices(List<String> services) {
		this.services = services;
	}
	public String getServicesurl() {
		return servicesurl;
	}
	public void setServicesurl(String servicesurl) {
		this.servicesurl = servicesurl;
	}
	public String getDoctorUrl() {
		return doctorUrl;
	}
	public void setDoctorUrl(String doctorUrl) {
		this.doctorUrl = doctorUrl;
	}
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	public String getTeamOfDoctors() {
		return teamOfDoctors;
	}
	public void setTeamOfDoctors(String teamOfDoctors) {
		this.teamOfDoctors = teamOfDoctors;
	}
	public List<String> getTeamOfDoctorsUrl() {
		return teamOfDoctorsUrl;
	}
	public void setTeamOfDoctorsUrl(List<String> teamOfDoctorsUrl) {
		this.teamOfDoctorsUrl = teamOfDoctorsUrl;
	}
	public String getResultOfCustome() {
		return resultOfCustome;
	}
	public void setResultOfCustome(String resultOfCustome) {
		this.resultOfCustome = resultOfCustome;
	}
	public List<String> getResultOfCustomeurl() {
		return resultOfCustomeurl;
	}
	public void setResultOfCustomeurl(List<String> resultOfCustomeurl) {
		this.resultOfCustomeurl = resultOfCustomeurl;
	}
}
