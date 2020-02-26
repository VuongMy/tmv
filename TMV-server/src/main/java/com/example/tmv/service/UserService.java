package com.example.tmv.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.PasswordDto;
import com.example.tmv.dto.object_request.UserInfo;
import com.example.tmv.model.User;
import com.example.tmv.payload.SignUpRequest;

public interface UserService {
	StandardResponse<String> ChangePassword(String email, PasswordDto passwordDto, String currentPassword);

	User editUser(String email, UserInfo userInfo);
}
