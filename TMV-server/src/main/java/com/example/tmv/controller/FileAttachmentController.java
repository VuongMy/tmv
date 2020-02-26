package com.example.tmv.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.tmv.common.ResponseResult;
import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.FileAttachmentDTO;
import com.example.tmv.dto.object_request.MultipleFileUploadForm;
import com.example.tmv.dto.object_request.SingleFileUploadForm;
import com.example.tmv.service.FileAttachmentService;
import com.example.tmv.model.FileAttachment;
import com.example.tmv.service.FileAttachmentService;
import com.example.tmv.service.util.MapperUtils;

@RestController
@RequestMapping("/api/file")
public class FileAttachmentController {

	private static Logger log = LoggerFactory.getLogger(FileAttachmentController.class);

	@Autowired
	private FileAttachmentService fileAttachmentService;

	/**
	 * upload a file
	 */
	@PostMapping("/")
	public StandardResponse<FileAttachmentDTO> uploadFile(
			@RequestParam(value = "file", required = true) MultipartFile file) {
		log.debug("REST request to upload a file");
		StandardResponse<FileAttachmentDTO> response = new StandardResponse<>();
		FileAttachment result = fileAttachmentService.uploadFile(file);
		FileAttachmentDTO fileAttachmentDTO = MapperUtils.toDto(result, FileAttachmentDTO.class);
		if (result == null) {
			response.setCode(ResponseResult.FAIL_CODE);
			response.setMessage(ResponseResult.FAIL_MESSAGE);
			response.setValue(fileAttachmentDTO);
		} else {
			response.setCode(ResponseResult.SUCCESS_CODE);
			response.setMessage(ResponseResult.SUCCESS_MESSAGE);
			response.setValue(fileAttachmentDTO);
		}
		return response;
	}

	/**
	 * upload single-file
	 */
	@PostMapping("/upload-single-file")
	public StandardResponse<FileAttachmentDTO> uploadSingleFile(SingleFileUploadForm form) {
		log.debug("REST request to upload a file");
		StandardResponse<FileAttachmentDTO> response = new StandardResponse<>();
		FileAttachment result = fileAttachmentService.uploadFile(form.getFile());
		FileAttachmentDTO fileAttachmentDTO = MapperUtils.toDto(result, FileAttachmentDTO.class);
		if (result == null) {
			response.setCode(ResponseResult.FAIL_CODE);
			response.setMessage(ResponseResult.FAIL_MESSAGE);
			response.setValue(fileAttachmentDTO);
		} else {
			response.setCode(ResponseResult.SUCCESS_CODE);
			response.setMessage(ResponseResult.SUCCESS_MESSAGE);
			response.setValue(fileAttachmentDTO);
		}
		return response;
	}

	@PostMapping("/upload-multifile")
	public StandardResponse<List<FileAttachmentDTO>> uploadMutilFile(
			MultipleFileUploadForm form) {
		StandardResponse<List<FileAttachmentDTO>> response = new StandardResponse<>();
		List<FileAttachmentDTO> result = fileAttachmentService.uploadMultiFile(form.getFiles());
		if (result == null) {
			response.setCode(ResponseResult.FAIL_CODE);
			response.setMessage(ResponseResult.FAIL_MESSAGE);
			response.setValue(result);
		} else {
			response.setCode(ResponseResult.SUCCESS_CODE);
			response.setMessage(ResponseResult.SUCCESS_MESSAGE);
			response.setValue(result);
		}
		return response;
	}
}
