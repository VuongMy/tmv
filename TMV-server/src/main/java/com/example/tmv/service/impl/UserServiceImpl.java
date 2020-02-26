package com.example.tmv.service.impl;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.tmv.common.ResponseResult;
import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.FileAttachmentDTO;
import com.example.tmv.dto.PasswordDto;
import com.example.tmv.dto.object_request.UserInfo;
import com.example.tmv.exception.BadRequestException;
import com.example.tmv.model.AuthProvider;
import com.example.tmv.model.FileAttachment;
import com.example.tmv.model.User;
import com.example.tmv.payload.AuthResponse;
import com.example.tmv.payload.SignUpRequest;
import com.example.tmv.repository.FileAttachmentRepository;
import com.example.tmv.repository.UserRepository;
import com.example.tmv.service.FileAttachmentService;
import com.example.tmv.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	UserRepository userRepository;

	@Autowired
	FileAttachmentService fileAttachmentService;

	@Autowired
	FileAttachmentRepository fileAttachmentRepository;

	@Override
	public StandardResponse<String> ChangePassword(String email, PasswordDto passwordDto, String currentPassword) {
		// TODO Auto-generated method stub
//		StandardResponse<String> response = new StandardResponse<>();
//		List<User> users = userRepository.findByEmailOrUserName(email);
//		if(users == null || users.size()<1) {
//			response.setCode(ResponseResult.FAIL_CODE);
//			response.setMessage(ResponseResult.FAIL_MESSAGE);
//			response.setValue("sai username hoặc mail");
//			return response;
//		}
//		User user = users.get(0);
//		currentPassword = user.getPassword();
//		
//		if (!user.getProvider().equals(AuthProvider.normal) || passwordEncoder.matches(passwordDto.getOldPassword(), currentPassword)) {
//			user.setPassword(passwordEncoder.encode(passwordDto.getNewPassword()));
//			user.setProvider(AuthProvider.normal);
//			userRepository.save(user);
//			response.setCode(ResponseResult.SUCCESS_CODE);
//			response.setMessage(ResponseResult.SUCCESS_MESSAGE);
//			response.setValue("đổi pass thành công");
//			// userRepository.saveAndFlush(entity)
//		} else {
//			response.setCode(ResponseResult.FAIL_CODE);
//			response.setMessage(ResponseResult.FAIL_MESSAGE);
//			response.setValue("mật khẩu cũ không đúng");
//		}
//		return response;
		return null;
	}

	@Override
	public User editUser(String email, UserInfo userInfo) {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(email).get();
		if (user == null) {
			return null;
		}

		FileAttachment fileAttachment = fileAttachmentRepository.findById((long) userInfo.getFileid()).get();

		user.setName(userInfo.getName());
		user.setAvatar(fileAttachment);
		user.setBirthday(userInfo.getBirthday());
		user.setGender(userInfo.getGender());
		user.setPhoneNumber(userInfo.getPhoneNumber());
		userRepository.save(user);

		return user;
	}
}
