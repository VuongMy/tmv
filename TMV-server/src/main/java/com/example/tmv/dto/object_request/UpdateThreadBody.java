package com.example.tmv.dto.object_request;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class UpdateThreadBody {
	private String title;

	private int thumbnailID;

	private List<Integer> attachtmentsID;

	private String content;

	private String type;

	private String vehicleType;

	private long vehicleStatusId;

	// private String userId;

	private Long vehicleModelId;

	private Long districtId;

	private Long price;

	private Long paymentMethodID;

	private String vehicleGen;

	private String vehicleColor;

	private String nameContact;

	private String phoneContact;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getPaymentMethodID() {
		return paymentMethodID;
	}

	public void setPaymentMethodID(Long paymentMethodID) {
		this.paymentMethodID = paymentMethodID;
	}

	public int getThumbnailID() {
		return thumbnailID;
	}

	public void setThumbnailID(int thumbnailID) {
		this.thumbnailID = thumbnailID;
	}

	public List<Integer> getAttachtmentsID() {
		return attachtmentsID;
	}

	public void setAttachtmentsID(List<Integer> attachtmentsID) {
		this.attachtmentsID = attachtmentsID;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public long getVehicleStatusId() {
		return vehicleStatusId;
	}

	public void setVehicleStatusId(long vehicleStatusId) {
		this.vehicleStatusId = vehicleStatusId;
	}

	public Long getVehicleModelId() {
		return vehicleModelId;
	}

	public void setVehicleModelId(Long vehicleModelId) {
		this.vehicleModelId = vehicleModelId;
	}

	public Long getDistrictId() {
		return districtId;
	}

	public void setDistrictId(Long districtId) {
		this.districtId = districtId;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public String getVehicleGen() {
		return vehicleGen;
	}

	public void setVehicleGen(String vehicleGen) {
		this.vehicleGen = vehicleGen;
	}

	public String getVehicleColor() {
		return vehicleColor;
	}

	public void setVehicleColor(String vehicleColor) {
		this.vehicleColor = vehicleColor;
	}

	public String getNameContact() {
		return nameContact;
	}

	public void setNameContact(String nameContact) {
		this.nameContact = nameContact;
	}

	public String getPhoneContact() {
		return phoneContact;
	}

	public void setPhoneContact(String phoneContact) {
		this.phoneContact = phoneContact;
	}
}
