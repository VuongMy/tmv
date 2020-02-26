package com.example.tmv.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.tmv.common.StandardResponse;
import com.example.tmv.model.Doctor;

public interface DoctorsTeamService {
	Page<Doctor> getDoctorsTeam(int pageNum,int pageSize);
	
	Doctor updateDoctor(Doctor doctor);
	
	String deleteDoctor(Doctor doctor);
	
}
