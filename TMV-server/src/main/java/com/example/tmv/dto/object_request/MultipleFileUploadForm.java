package com.example.tmv.dto.object_request;

import org.springframework.web.multipart.MultipartFile;

public class MultipleFileUploadForm {
	private MultipartFile[] files;

	public MultipartFile[] getFiles() {
		return files;
	}

	public void setFiles(MultipartFile[] files) {
		this.files = files;
	}

}
