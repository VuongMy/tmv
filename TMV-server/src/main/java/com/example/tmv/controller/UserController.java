package com.example.tmv.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.tmv.common.ResponseResult;
import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.FileAttachmentDTO;
import com.example.tmv.dto.PasswordDto;
import com.example.tmv.dto.object_request.UserInfo;
import com.example.tmv.exception.ResourceNotFoundException;
import com.example.tmv.model.User;
import com.example.tmv.payload.SignUpRequest;
import com.example.tmv.repository.UserRepository;
import com.example.tmv.security.CurrentUser;
import com.example.tmv.security.UserPrincipal;
import com.example.tmv.service.UserService;

@RestController
@RequestMapping("api/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;

	@GetMapping("/user/me")
	public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
//		return userRepository.findById(userPrincipal.getId())
//				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
		return null;
	}

	final String EDIT_ERROR = "Sửa không thành công";
	final String EDIT_SUCCESS = "Sửa thành công";
	final String MAIL_IS_NOT_EXIST = "mail chưa được đăng ký";

	@GetMapping("/me")
	public StandardResponse<User> getCurrentUserByEmail() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String email = auth.getName().toString();
		User user = userRepository.findByEmail(email).get();
		StandardResponse<User> response = new StandardResponse<>();
		if (user == null) {
			response.setCode(ResponseResult.FAIL_CODE);
			response.setMessage(ResponseResult.FAIL_MESSAGE);
			response.setValue(null);
		} else {
			response.setCode(ResponseResult.SUCCESS_CODE);
			response.setMessage(ResponseResult.SUCCESS_MESSAGE);
			response.setValue(user);
		}
		return response;
	}

	@PutMapping("/change-pass")
	public StandardResponse<String> ChangePassword(@RequestBody PasswordDto passwordDto) {
		StandardResponse<String> response = new StandardResponse<>();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String currentPassword = auth.getCredentials().toString();
		return userService.ChangePassword(auth.getName(), passwordDto, currentPassword);
//		if (user == null) {
//			response.setCode(ResponseResult.FAIL_CODE);
//			response.setMessage(ResponseResult.FAIL_MESSAGE);
//			response.setValue(EDIT_ERROR);
//		} else {
//			response.setCode(ResponseResult.SUCCESS_CODE);
//			response.setMessage(ResponseResult.SUCCESS_MESSAGE);
//			response.setValue(EDIT_SUCCESS);
//		}
//		return response;
	}

	@PutMapping("/edit-user")
	public StandardResponse<String> editUser(@RequestBody UserInfo userInfo) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String email = auth.getName().toString();
		User user = userService.editUser(email, userInfo);

		StandardResponse<String> response = new StandardResponse<>();

		if (user == null) {
			response.setCode(ResponseResult.FAIL_CODE);
			response.setMessage(ResponseResult.FAIL_MESSAGE);
			response.setValue(EDIT_ERROR);
		} else {
			response.setCode(ResponseResult.SUCCESS_CODE);
			response.setMessage(ResponseResult.SUCCESS_MESSAGE);
			response.setValue(EDIT_SUCCESS);
		}
		return response;
	}
}
