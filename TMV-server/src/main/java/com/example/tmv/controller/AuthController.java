package com.example.tmv.controller;

import org.apache.http.client.ClientProtocolException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.tmv.common.ResponseResult;
import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.FileAttachmentDTO;
import com.example.tmv.dto.PasswordWithTokenDto;
import com.example.tmv.dto.object_request.RegisterForm;
import com.example.tmv.dto.object_request.SocialLogin;
import com.example.tmv.exception.BadRequestException;
import com.example.tmv.exception.ResourceNotFoundException;
import com.example.tmv.model.AuthProvider;
import com.example.tmv.model.FileAttachment;
import com.example.tmv.model.GoogleInfo;
import com.example.tmv.model.Role;
import com.example.tmv.model.User;
import com.example.tmv.model.UserActive;
import com.example.tmv.payload.ApiResponse;
import com.example.tmv.payload.AuthResponse;
import com.example.tmv.payload.LoginRequest;
import com.example.tmv.payload.SignUpRequest;
import com.example.tmv.repository.FileAttachmentRepository;
import com.example.tmv.repository.UserRepository;
import com.example.tmv.security.CurrentUser;
import com.example.tmv.security.TokenProvider;
import com.example.tmv.security.UserPrincipal;
import com.example.tmv.service.AuthenService;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.Properties;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private TokenProvider tokenProvider;

	@Autowired
	private AuthenService authenService;
	
	@Autowired
	private FileAttachmentRepository fileAttachmentRepository;

	final String ACCOUNT_IS_NOT_EXIST = "tài khoản không tồn tại";
	final String ACCOUNT_IS_NOT_ACTIVE = "tài khoản chưa được kích hoạt";
	final String GOOGLE_TOKEN_IS_INCORRECT = "lỗi đăng nhập bằng gmail";
	
	@PostMapping("/login")
	public StandardResponse<AuthResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
		StandardResponse<AuthResponse> response = new StandardResponse<>();
		List<User> users = userRepository.findByUsername(loginRequest.getEmail());
		if (users == null || users.size() < 1) {
			response.setCode(ResponseResult.FAIL_CODE);
			response.setMessage(ACCOUNT_IS_NOT_EXIST);
			return response;
		}
		User user = users.get(0);
		if (!(user.getActive().toString().equals(UserActive.ACTIVE.toString()))) {
			response.setCode(ResponseResult.FAIL_CODE);
			response.setMessage(ACCOUNT_IS_NOT_ACTIVE);
			return response;
		}
		user.setLoginType(AuthProvider.normal);
		userRepository.save(user);
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token = tokenProvider.createToken(authentication);
		response.setCode(ResponseResult.SUCCESS_CODE);
		response.setMessage(ResponseResult.SUCCESS_MESSAGE);
		response.setValue(new AuthResponse(token));
		return response;
		//return null;
	}
	
	@PostMapping("/send-mail")
	public StandardResponse<String> sendMail(@RequestBody RegisterForm registerForm) {
		//System.out.println("1234");
		String result = authenService.sendMail(registerForm);
		StandardResponse<String> response = new StandardResponse<>();
		if(result.equals("success")) {
			response.setCode(200);
		}else {
			response.setCode(500);
		}
		response.setMessage(result);
		return response;
	}

	@PostMapping("/signup")
	public StandardResponse<String> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		return authenService.registerUser(signUpRequest);
	}

	@PostMapping("/change-pass-with-token")
	public StandardResponse<String> changePassWithToken(@Valid @RequestBody PasswordWithTokenDto passwordWithTokenDto) {
		return authenService.changePassWithToken(passwordWithTokenDto);
	}

	@GetMapping("/active-account")
	public StandardResponse<String> activeAccount(String email, String token) {
		return authenService.activeAccount(email, token);
	}

	@GetMapping("/forgot-password")
	public StandardResponse<String> forgotPassword(String email) {
		return authenService.forgotPassword(email);
	}

	@RequestMapping("/login-google")
	public StandardResponse<AuthResponse> loginGoogle(@RequestBody SocialLogin socialLogin) {
//		GoogleInfo googleInfo = authenService.loginGoogle(socialLogin);
//		StandardResponse<AuthResponse> response = new StandardResponse<>();
//		
//		if(googleInfo == null) {
//			response.setCode(ResponseResult.FAIL_CODE);
//			response.setMessage(GOOGLE_TOKEN_IS_INCORRECT);
//			return response;
//		}
//		List<User> users = userRepository.findByEmailOrUserName(googleInfo.getEmail());
//		User user = null;
//		if (users == null || users.size() < 1) {
//			User newUser = new User();
//			
//			FileAttachment fileAttachment = new FileAttachment(); 
//			fileAttachment.setUrl(googleInfo.getPicture());
//			fileAttachment = fileAttachmentRepository.save(fileAttachment);
//			
//			newUser.setAvatar(fileAttachment);
//			newUser.setEmail(googleInfo.getEmail());
//			newUser.setName(googleInfo.getName());
//			newUser.setProvider(AuthProvider.google);
//			newUser.setCreate_date(new Date());
//			newUser.setActive(UserActive.ACTIVE);
//			newUser.setRole(Role.USER);
//			newUser.setPassword(passwordEncoder.encode(socialLogin.getAccessToken()));
//			newUser.setLoginType(AuthProvider.google);
//			newUser = userRepository.save(newUser);
//			user = newUser;
//		}
//		else {
//			user = users.get(0);
//			user.setLoginType(AuthProvider.google);
//			user = userRepository.save(user);
//		}
//		Authentication authentication = authenticationManager
//				.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), "google"));
//		SecurityContextHolder.getContext().setAuthentication(authentication);
//		String token = tokenProvider.createToken(authentication);
//		response.setCode(ResponseResult.SUCCESS_CODE);
//		response.setMessage(ResponseResult.SUCCESS_MESSAGE);
//		response.setValue(new AuthResponse(token));
//		return response;
		return null;
	}
}
