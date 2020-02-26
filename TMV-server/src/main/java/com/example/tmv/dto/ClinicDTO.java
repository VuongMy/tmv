package com.example.tmv.dto;

import java.util.ArrayList;
import java.util.List;

public class ClinicDTO {
	String clinic;
	List<String> clinicImage = new ArrayList<String>();

	public String getClinic() {
		return clinic;
	}

	public void setClinic(String clinic) {
		this.clinic = clinic;
	}

	public List<String> getClinicImage() {
		return clinicImage;
	}

	public void setClinicImage(List<String> clinicImage) {
		this.clinicImage = clinicImage;
	}

}
