package com.example.tmv.dto.object_request;

import org.springframework.web.multipart.MultipartFile;

public class SingleFileUploadForm {
	private MultipartFile file;

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

}
