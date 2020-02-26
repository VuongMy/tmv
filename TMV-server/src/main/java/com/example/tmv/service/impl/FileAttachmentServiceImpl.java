package com.example.tmv.service.impl;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.tmv.dto.FileAttachmentDTO;
import com.example.tmv.service.FileAttachmentService;
import com.example.tmv.service.util.MapperUtils;
import com.example.tmv.util.FileUtil;
import com.example.tmv.util.RandomMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.tmv.model.FileAttachment;
import com.example.tmv.repository.FileAttachmentRepository;
import com.example.tmv.service.FileAttachmentService;

@Service
public class FileAttachmentServiceImpl implements FileAttachmentService {

	private static Logger log = LoggerFactory.getLogger(FileAttachmentService.class);
	private static String UPLOADINGDIR;
	private static String STORE_SERVER;

	@Value("${app.store_path}")
	public void setUploadingDir(String uploadingDir) {
		UPLOADINGDIR = uploadingDir;
	}
	
	@Value("${app.store_server}")
	public void setStoreServer(String store_server) {
		STORE_SERVER = store_server;
	}
	
	@Autowired
	FileAttachmentRepository fileAttachmentRepository;
	
	DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

	@Override
	public FileAttachment uploadFile(MultipartFile uploadedFile) {
		try {
			log.debug("Request to upload a file");
			Date date = new Date();
			String day = dateFormat.format(date);
			
			String timeString = RandomMethod.getStringFollowDate()+"/";
			String addString = day+"/"+timeString;
			String folder = UPLOADINGDIR+addString;
			File storeFolder = new File (folder);
			if(!storeFolder.exists()) {
				storeFolder.mkdirs();
			}
			
			String extension = FileUtil.getExtensionByStringHandling(uploadedFile.getOriginalFilename()).get();
			String name = FileUtil.getNameByStringHandling(uploadedFile.getOriginalFilename()).get();
			String filename = name + RandomMethod.randomStringFollowDate() + "." + extension;
			File file = new File(folder + filename);
			//System.out.println(file.getAbsolutePath());
			uploadedFile.transferTo(file);
			FileAttachment fileAttachment = new FileAttachment();
			fileAttachment.setCreatedDate(new Date());
			fileAttachment.setStoreName(filename);
			fileAttachment.setFileExt(extension);
			fileAttachment.setFileName(file.getAbsolutePath());
			fileAttachment.setSize(file.getTotalSpace());
			fileAttachment.setUrl(STORE_SERVER+addString+filename);
			
			//System.out.println(fileAttachment.getUrl());
			fileAttachment = fileAttachmentRepository.save(fileAttachment);
			System.out.println(fileAttachment.getUrl());
			return fileAttachment;

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public List<FileAttachmentDTO> uploadMultiFile(MultipartFile[] files) {
		List<FileAttachmentDTO> fileAttachmentDTOs = new ArrayList<FileAttachmentDTO>();
		try {		
			for (MultipartFile uploadedFile : files) {
				String extension = FileUtil.getExtensionByStringHandling(uploadedFile.getOriginalFilename()).get();
				String name = FileUtil.getNameByStringHandling(uploadedFile.getOriginalFilename()).get();
				String filename = name + RandomMethod.randomStringFollowDate() + "." + extension;
				File file = new File(UPLOADINGDIR + filename);
				System.out.println(file.getAbsolutePath());
				uploadedFile.transferTo(file);
				FileAttachment fileAttachment = new FileAttachment();
				fileAttachment.setCreatedDate(new Date());
				fileAttachment.setStoreName(filename);
				fileAttachment.setFileExt(extension);
				fileAttachment.setFileName(file.getAbsolutePath());
				fileAttachment.setSize(file.getTotalSpace());
				fileAttachment.setUrl(STORE_SERVER+filename);
				fileAttachment = fileAttachmentRepository.save(fileAttachment);
				
				FileAttachmentDTO fileAttachmentDTO = MapperUtils.toDto(fileAttachment, FileAttachmentDTO.class);
				
				fileAttachmentDTOs.add(fileAttachmentDTO);
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
		return fileAttachmentDTOs;
	}


}
