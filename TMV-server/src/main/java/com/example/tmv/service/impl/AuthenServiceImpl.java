package com.example.tmv.service.impl;

import java.net.URI;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Properties;
import java.util.Random;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.swing.text.html.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.PasswordWithTokenDto;
import com.example.tmv.dto.object_request.RegisterForm;
import com.example.tmv.dto.object_request.SocialLogin;
import com.example.tmv.exception.BadRequestException;
import com.example.tmv.model.AuthProvider;
import com.example.tmv.model.GoogleInfo;
import com.example.tmv.model.Role;
import com.example.tmv.model.User;
import com.example.tmv.model.UserActive;
import com.example.tmv.payload.ApiResponse;
import com.example.tmv.payload.AuthResponse;
import com.example.tmv.payload.SignUpRequest;
import com.example.tmv.repository.UserRepository;
import com.example.tmv.service.AuthenService;
import com.example.tmv.util.RandomMethod;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@Service
public class AuthenServiceImpl implements AuthenService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	private static String EMAIL;
	private static String PASS;

	@Value("${app.email}")
	public void setEmail(String email) {
		EMAIL = email;
	}

	@Value("${app.pass}")
	public void setPass(String pass) {
		PASS = pass;
	}

	final String SEND_KEY_TO_MAIL = "đã gửi key tơi mail";
	final String ERROR = "lỗi";
	final String MAIL_IS_NOT_EXIST = "mail chưa được đăng ký";
	final String ACTIVE_ACCOUNT_SUCCESS = "kích hoạt thành công";
	final String TOKEN_IS_INCORRECT = "token sai";
	final String ACCOUNT_IS_NOT_ACTIVE = "tài khoản chưa được kích hoạt";
	final String CHANGE_PASS_SUCCESS = "đổi mật khẩu thành công";

	@Override
	public StandardResponse<String> registerUser(SignUpRequest signUpRequest) {
		StandardResponse<String> response = new StandardResponse<>();
		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			throw new BadRequestException("Email address already in use.");
		}

		List<User> users = userRepository.findByUsername(signUpRequest.getUsername());
		if (users.size() > 0) {
			throw new BadRequestException("Username already in use.");
		}

		// Creating user's account
		User user = new User();
		user.setName(signUpRequest.getName());
		user.setEmail(signUpRequest.getEmail());
		user.setPassword(signUpRequest.getPassword());
		user.setProvider(AuthProvider.normal);
		user.setUsername(signUpRequest.getUsername());
		user.setActive(UserActive.ACTIVE);
		user.setCreate_date(new Date());
		user.setNumberOfError(0);
		user.setRole(Role.USER);
		user.setKeyToken(RandomMethod.randomKey(50));

		user.setPassword(passwordEncoder.encode(user.getPassword()));

		User result = userRepository.save(user);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/me")
				.buildAndExpand(result.getId()).toUri();
		sendMailActive(signUpRequest.getEmail(), user.getKeyToken());
		return response.getSuccessResponse("User registered successfully");
		//return null;
	}

	public void sendMailActive(String email, String key) {
		try {
			Properties props = new Properties();
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			props.put("mail.smtp.host", "smtp.gmail.com");
			props.put("mail.smtp.port", "587");

			Session session = Session.getInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication("Cmscorpx@gmail.com", "Cmspkl9!");
				}
			});
			Message msg = new MimeMessage(session);
			String urlActive = "http://localhost:8080/auth/active-account?email=" + email + "&token=" + key;
			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
			msg.setSubject("ACtive Account");
			msg.setContent("Active Account click this url : " + urlActive, "text/html");
			msg.setSentDate(new Date());

			MimeBodyPart messageBodyPart = new MimeBodyPart();

			messageBodyPart.setContent("Active Account click this url : " + urlActive, "text/html");

			Multipart multipart = new MimeMultipart();
			multipart.addBodyPart(messageBodyPart);
			// Transport.send(msg);
		} catch (Exception e) {
			// TODO: handle exception
			throw new BadRequestException("Error");
		}
	}
	
	public void sendMail(String email,RegisterForm registerForm) {
		try {
			Properties props = new Properties();
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			props.put("mail.smtp.host", "smtp.gmail.com");
			props.put("mail.smtp.port", "587");

			Session session = Session.getInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication("xuonglixitet2020@gmail.com", "myhieu91");
				}
			});
			Message msg = new MimeMessage(session);
			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
			msg.setSubject(registerForm.getEmail()+ " Register");
			String content = "";
			
			content+= "name : "+registerForm.getName()+"\n";
			content+= "birthday : "+registerForm.getBirthday() +"\n";
			content+= "gender : "+registerForm.getGender()+"\n";
			content+= "age : "+registerForm.getAge()+"\n";
			content+= "address : "+registerForm.getAddress()+"\n";
			content+= "email : "+registerForm.getEmail()+"\n";
			content+= "content : "+registerForm.getContent()+"\n";
			
			msg.setContent(content, "text/plain");
			msg.setSentDate(new Date());

//			MimeBodyPart messageBodyPart = new MimeBodyPart();
//
//			messageBodyPart.setContent("Active Account click this url : " + urlActive, "text/html");
//
//			Multipart multipart = new MimeMultipart();
//			multipart.addBodyPart(messageBodyPart);
			Transport.send(msg);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new BadRequestException("Error");
		}
	}

	@Override
	public StandardResponse<String> forgotPassword(String email) {
		// TODO Auto-generated method stub
		StandardResponse<String> response = new StandardResponse<>();
		try {
			User user = userRepository.findByEmail(email).get();
			if (user == null) {
				throw new BadRequestException("Account isn't exist");
			}
			if (!(user.getActive().toString().equals(UserActive.ACTIVE.toString()))) {
				throw new BadRequestException("Account isn't active");
			}
			Properties props = new Properties();
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			props.put("mail.smtp.host", "smtp.gmail.com");
			props.put("mail.smtp.port", "587");

			Session session = Session.getInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(EMAIL, PASS);
				}
			});
			Message msg = new MimeMessage(session);

			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
			msg.setSubject("Forgot Password");
			String key = RandomMethod.randomKey(5);

			user.setNumberOfError(0);
			user.setKeyToken(key);
			userRepository.save(user);

			msg.setContent("Use This Key To Change Password: " + key, "text/html");
			msg.setSentDate(new Date());

			MimeBodyPart messageBodyPart = new MimeBodyPart();
			messageBodyPart.setContent("Use This Key To Change Password: " + key, "text/html");

			Multipart multipart = new MimeMultipart();
			multipart.addBodyPart(messageBodyPart);
			Transport.send(msg);
			return response.getSuccessResponse(SEND_KEY_TO_MAIL);
		} catch (Exception e) {
			// TODO: handle exception
			return response.getErrorResponse(ERROR);
		}
	}

	@Override
	public StandardResponse<String> activeAccount(String email, String token) {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(email).get();
		StandardResponse<String> response = new StandardResponse<>();
		if (user == null) {
			return response.getErrorResponse(MAIL_IS_NOT_EXIST);
		}
		if (token.equals(user.getKeyToken())) {
			user.setActive(UserActive.ACTIVE);
			userRepository.save(user);
			return response.getSuccessResponse(ACTIVE_ACCOUNT_SUCCESS);
		} else {
			return response.getErrorResponse(TOKEN_IS_INCORRECT);
		}
	}

	@Override
	public StandardResponse<String> changePassWithToken(PasswordWithTokenDto passwordWithTokenDto) {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(passwordWithTokenDto.getEmail()).get();
		StandardResponse<String> response = new StandardResponse<>();
		if (user == null) {
			return response.getErrorResponse(MAIL_IS_NOT_EXIST);
		}
		if (!(user.getActive().toString().equals(UserActive.ACTIVE.toString()))) {
			return response.getErrorResponse(ACCOUNT_IS_NOT_ACTIVE);
		}
		if (user.getKeyToken().equals(passwordWithTokenDto.getToken())) {
			user.setPassword(passwordEncoder.encode(passwordWithTokenDto.getNewPassword()));
			userRepository.save(user);
			return response.getSuccessResponse(CHANGE_PASS_SUCCESS);
		} else {
			if (user.getNumberOfError() > 5) {
				String key = RandomMethod.randomKey(5);
				user.setNumberOfError(0);
				user.setKeyToken(key);
				userRepository.save(user);
			} else {
				user.setNumberOfError(user.getNumberOfError() + 1);
				userRepository.save(user);
			}
			return response.getErrorResponse(TOKEN_IS_INCORRECT);
		}
	}
	
	HttpHeaders createHeaders( String token ){
		   return new HttpHeaders(){
		      {
		         String authHeader = "Bearer ya29.Glz4BrSMZDDWwDRvzw0umZqUwSFJmNDLd2GqlFYkHEb82Uj5jIMC00B2FtQ1udhfXkwg1uhRuf6HrepBAABNEzziSeH1w36I2CfHEhxOn7gk00k2I33kMP3E_J0RSg";
		         set( "Authorization", authHeader );
		      }
		   };
		}

	@Override
	public GoogleInfo loginGoogle(SocialLogin socialLogin) {
		// TODO Auto-generated method stub
		String token = socialLogin.getAccessToken();
		HttpHeaders headers = new HttpHeaders();
		 
        headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
        // Yêu cầu trả về định dạng JSON
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer "+token);
 
        // HttpEntity<String>: To get result as String.
        HttpEntity<String> entity = new HttpEntity<String>(headers);
 
        // RestTemplate
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<GoogleInfo> response = restTemplate.exchange("https://www.googleapis.com/oauth2/v3/userinfo", HttpMethod.POST, entity, GoogleInfo.class);        
        return response.getBody();
		
	}

	@Override
	public String sendMail(RegisterForm registerForm) {
		// TODO Auto-generated method stub
		//sendMail("phamhoanglongptit@gmail.com", registerForm);
		sendMail("honganhjp317@gmail.com", registerForm);
		sendMail("ryonakagawa42@gmail.com", registerForm);
		return "success";
	}

}
