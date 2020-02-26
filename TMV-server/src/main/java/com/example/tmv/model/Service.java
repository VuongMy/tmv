package com.example.tmv.model;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Service {
	
	@Id
	ObjectId _id;
	String name;
	String intro;
	List<Image> serviceImage = new ArrayList<Image>();
	List<Image> customerImage = new ArrayList<Image>();

	public ObjectId get_id() {
		return _id;
	}

	public void set_id(ObjectId _id) {
		this._id = _id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIntro() {
		return intro;
	}

	public void setIntro(String intro) {
		this.intro = intro;
	}

	public List<Image> getServiceImage() {
		return serviceImage;
	}

	public void setServiceImage(List<Image> serviceImage) {
		this.serviceImage = serviceImage;
	}

	public List<Image> getCustomerImage() {
		return customerImage;
	}

	public void setCustomerImage(List<Image> customerImage) {
		this.customerImage = customerImage;
	}

}
