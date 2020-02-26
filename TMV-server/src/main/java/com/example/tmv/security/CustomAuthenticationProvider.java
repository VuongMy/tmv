package com.example.tmv.security;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.tmv.model.AuthProvider;
import com.example.tmv.model.Role;
import com.example.tmv.model.User;
import com.example.tmv.repository.UserRepository;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String name = authentication.getName();
		Object credentials = authentication.getCredentials();
		System.out.println("credentials class: " + credentials.getClass());
		if (!(credentials instanceof String)) {
			return null;
		}
		String password = credentials.toString();

		Optional<User> userOptional = userRepository.findByEmail(name);
		

		if (!userOptional.isPresent()) {
			throw new BadCredentialsException("Authentication failed");
		}
		User user = userOptional.get();
		String passwordUser = user.getPassword();
		if(user.getLoginType().equals(AuthProvider.google) && password.equals("google")) {
			
		}	
		else if(!passwordEncoder.matches(password, passwordUser)) {
			throw new BadCredentialsException("Authentication failed");
		}
		
		List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
		grantedAuthorities.add(new SimpleGrantedAuthority(user.getRole().toString()));

		Authentication auth = new UsernamePasswordAuthenticationToken(UserPrincipal.create(user), password, grantedAuthorities);
		return auth;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}
}
