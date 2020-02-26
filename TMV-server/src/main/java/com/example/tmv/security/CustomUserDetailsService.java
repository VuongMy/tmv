package com.example.tmv.security;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.tmv.exception.ResourceNotFoundException;
import com.example.tmv.model.AuthProvider;
import com.example.tmv.model.User;
import com.example.tmv.repository.UserRepository;

/**
 * Created by rajeevkumarsingh on 02/08/17.
 */

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
	private PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found ")
        );
        if(user.getLoginType().equals(AuthProvider.google)) {
        	user.setPassword("google");
        }
        return UserPrincipal.create(user);
    }

    @Transactional
    public UserDetails loadUserById(String id) {
    	ObjectId objectID = new ObjectId(id);
        User user = userRepository.findByid(objectID);

        return UserPrincipal.create(user);
    }
}