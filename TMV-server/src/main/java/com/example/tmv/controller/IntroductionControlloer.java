package com.example.tmv.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tmv.dto.ClinicDTO;
import com.example.tmv.dto.IntroDTO;
import com.example.tmv.dto.MyCustomers;
import com.example.tmv.dto.MyDoctorDTO;
import com.example.tmv.dto.MyOfficeDTO;
import com.example.tmv.model.User;
import com.example.tmv.security.CurrentUser;
import com.example.tmv.security.UserPrincipal;
import com.example.tmv.service.IntroductionService;

@RestController
@RequestMapping("/api/intro")
public class IntroductionControlloer {
	
	
	@Autowired
	IntroductionService introductionService;
	
	@GetMapping("/get-my-office")
	public MyOfficeDTO getMyOffice() {
		return introductionService.getMyOffice();
	}
	
	@PostMapping("/update-my-office")
	public MyOfficeDTO updateMyOffice(@RequestBody MyOfficeDTO myOfficeDTO) {
		return introductionService.updateMyOffice(myOfficeDTO);
	}
	
	@GetMapping("/get-my-clinic")
	public ClinicDTO getMyClinic() {
		return introductionService.getMyClinic();
	}
	
	@PostMapping("/update-my-clinic")
	public ClinicDTO updateMyClinic(@RequestBody ClinicDTO clinicDTO) {
		return introductionService.updateMyClinic(clinicDTO);
	}
	
	@PostMapping("/update-my-intro")
	public IntroDTO updateMyIntro(@RequestBody IntroDTO introDTO) {
		return introductionService.updateMyIntro(introDTO);
	}
	
	@GetMapping("/get-my-intro")
	public IntroDTO getMyIntro() {
		return introductionService.getMyIntro();
	}
	
	@PostMapping("/update-my-doctor")
	public MyDoctorDTO updateMyDoctor(@RequestBody MyDoctorDTO myDoctorDTO) {
		return introductionService.updateMyDoctor(myDoctorDTO);
	}
	
	@GetMapping("/get-my-doctor")
	public MyDoctorDTO getMyDoctor() {
		return introductionService.getMyDoctor();
	}
	
	@PostMapping("/update-my-customer")
	public MyCustomers updateMyCustomer(@RequestBody MyCustomers myCustomers) {
		return introductionService.updateMyCustomer(myCustomers);
	}
	
	@GetMapping("/get-my-customer")
	public MyCustomers getMyCustomer() {
		return introductionService.getMyCustomer();
	}
	
	

}
