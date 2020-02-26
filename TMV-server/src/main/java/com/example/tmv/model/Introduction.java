package com.example.tmv.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Id;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Introduction {
	
	private static final long serialVersionUID = -5974477228975175184L;
	
	@Id
	private ObjectId _id;
	
	String myOffice;
	List<String> myOfficeImage = new ArrayList<String>();
	
	String clinic;
	List<String> clinicImage = new ArrayList<String>();
	
	String myIntro;
	String introVideo;
	String introImage;
	
	String myDoctor;
	String myDoctorImage;
	
	String customersService;
	String customersServiceImage;
	
	List<String> banner;

	public String getMyIntro() {
		return myIntro;
	}

	public void setMyIntro(String myIntro) {
		this.myIntro = myIntro;
	}

	public String getIntroVideo() {
		return introVideo;
	}

	public void setIntroVideo(String introVideo) {
		this.introVideo = introVideo;
	}

	public String getIntroImage() {
		return introImage;
	}

	public void setIntroImage(String introImage) {
		this.introImage = introImage;
	}

	public String getMyDoctor() {
		return myDoctor;
	}

	public void setMyDoctor(String myDoctor) {
		this.myDoctor = myDoctor;
	}

	public String getMyDoctorImage() {
		return myDoctorImage;
	}

	public void setMyDoctorImage(String myDoctorImage) {
		this.myDoctorImage = myDoctorImage;
	}

	public String getCustomersService() {
		return customersService;
	}

	public void setCustomersService(String customersService) {
		this.customersService = customersService;
	}

	public String getCustomersServiceImage() {
		return customersServiceImage;
	}

	public void setCustomersServiceImage(String customersServiceImage) {
		this.customersServiceImage = customersServiceImage;
	}

	public ObjectId get_id() {
		return _id;
	}

	public void set_id(ObjectId _id) {
		this._id = _id;
	}

	public String getMyOffice() {
		return myOffice;
	}

	public void setMyOffice(String myOffice) {
		this.myOffice = myOffice;
	}

	public String getClinic() {
		return clinic;
	}

	public void setClinic(String clinic) {
		this.clinic = clinic;
	}

	public List<String> getMyOfficeImage() {
		return myOfficeImage;
	}

	public void setMyOfficeImage(List<String> myOfficeImage) {
		this.myOfficeImage = myOfficeImage;
	}

	public List<String> getClinicImage() {
		return clinicImage;
	}

	public void setClinicImage(List<String> clinicImage) {
		this.clinicImage = clinicImage;
	}

	public List<String> getBanner() {
		return banner;
	}

	public void setBanner(List<String> banner) {
		this.banner = banner;
	}
	
}
