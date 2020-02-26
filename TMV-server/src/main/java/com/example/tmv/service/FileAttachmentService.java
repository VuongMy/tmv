package com.example.tmv.service;

import org.springframework.web.multipart.MultipartFile;
import com.example.tmv.model.FileAttachment;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import com.example.tmv.dto.FileAttachmentDTO;

public interface FileAttachmentService {

	FileAttachment uploadFile(MultipartFile file);
	List<FileAttachmentDTO> uploadMultiFile(MultipartFile[] files);
}
