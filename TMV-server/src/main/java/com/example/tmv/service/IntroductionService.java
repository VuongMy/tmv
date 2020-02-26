package com.example.tmv.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.example.tmv.dto.ClinicDTO;
import com.example.tmv.dto.IntroDTO;
import com.example.tmv.dto.MyCustomers;
import com.example.tmv.dto.MyDoctorDTO;
import com.example.tmv.dto.MyOfficeDTO;

public interface IntroductionService {
	MyOfficeDTO getMyOffice();
	
	MyOfficeDTO updateMyOffice(MyOfficeDTO myOfficeDTO);
	
	ClinicDTO getMyClinic();
	
	ClinicDTO updateMyClinic(ClinicDTO clinicDTO);
	
	IntroDTO updateMyIntro(IntroDTO introDTO);
	
	IntroDTO getMyIntro();
	
	MyDoctorDTO updateMyDoctor(MyDoctorDTO myDoctorDTO);
	
	MyDoctorDTO getMyDoctor();
	
	MyCustomers updateMyCustomer(MyCustomers myCustomers);
	
	MyCustomers getMyCustomer();
}
