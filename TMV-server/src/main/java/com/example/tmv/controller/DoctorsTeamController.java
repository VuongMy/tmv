package com.example.tmv.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.tmv.common.ResponseResult;
import com.example.tmv.common.StandardResponse;
import com.example.tmv.model.Doctor;
import com.example.tmv.model.User;
import com.example.tmv.service.DoctorsTeamService;

@RestController
@RequestMapping("api/doctor")
public class DoctorsTeamController {
	
	@Autowired
	DoctorsTeamService doctorsTeamService;
	
	@GetMapping("/get-doctors-team")
	public Page<Doctor> getDoctorsTeam(@RequestParam(value = "pageNum", required = false, defaultValue = "0") int pageNum,
            @RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize) {
		
		Page<Doctor> result = doctorsTeamService.getDoctorsTeam(pageNum,pageSize);	
		return result;
	}
	
	@PostMapping("/update-doctor")
	public Doctor updateDoctor(@RequestBody Doctor doctor) {
		
		Doctor result = doctorsTeamService.updateDoctor(doctor);
		return result;
	}
	
	@DeleteMapping("/update-doctor")
	public String deleteDoctor(@RequestBody Doctor doctor) {
		
		String result = doctorsTeamService.deleteDoctor(doctor);
		return result;
	}
}
