package com.example.tmv.dto;

import java.util.ArrayList;
import java.util.List;

public class MyOfficeDTO {
	String myOffice;
	List<String> myOfficeImage = new ArrayList<String>();

	public String getMyOffice() {
		return myOffice;
	}

	public void setMyOffice(String myOffice) {
		this.myOffice = myOffice;
	}

	public List<String> getMyOfficeImage() {
		return myOfficeImage;
	}

	public void setMyOfficeImage(List<String> myOfficeImage) {
		this.myOfficeImage = myOfficeImage;
	}

	

}
