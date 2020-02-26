package com.example.tmv.service;

import org.springframework.http.ResponseEntity;

import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.PasswordWithTokenDto;
import com.example.tmv.dto.object_request.RegisterForm;
import com.example.tmv.dto.object_request.SocialLogin;
import com.example.tmv.model.GoogleInfo;
import com.example.tmv.payload.SignUpRequest;

public interface AuthenService {
	StandardResponse<String> registerUser(SignUpRequest signUpRequest);
	StandardResponse<String> forgotPassword(String email);
	StandardResponse<String> activeAccount(String email,String token);
	StandardResponse<String> changePassWithToken(PasswordWithTokenDto passwordWithTokenDto);
	GoogleInfo loginGoogle(SocialLogin socialLogin);
	String sendMail(RegisterForm registerForm);
}
