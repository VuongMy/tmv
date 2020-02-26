package com.example.tmv.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tmv.dto.ClinicDTO;
import com.example.tmv.dto.IntroDTO;
import com.example.tmv.dto.MyCustomers;
import com.example.tmv.dto.MyDoctorDTO;
import com.example.tmv.dto.MyOfficeDTO;
import com.example.tmv.model.Introduction;
import com.example.tmv.repository.IntroductionRepository;
import com.example.tmv.service.IntroductionService;
import com.example.tmv.service.util.MapperUtils;

@Service
public class IntroductionServiceImpl implements IntroductionService{
	
	@Autowired
	IntroductionRepository introductionRepository;
	
	@Override
	public MyOfficeDTO getMyOffice() {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		MyOfficeDTO myOfficeDTO = MapperUtils.toDto(introductionList.get(0), MyOfficeDTO.class);
		return myOfficeDTO;
	}

	@Override
	public MyOfficeDTO updateMyOffice(MyOfficeDTO myOfficeDTO) {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		Introduction introduction = new Introduction();
		if(introductionList != null && introductionList.size() > 0) {
			introduction = introductionList.get(0);
		}
		introduction.setMyOffice(myOfficeDTO.getMyOffice());
		introduction.setMyOfficeImage(myOfficeDTO.getMyOfficeImage());
		introduction = introductionRepository.save(introduction);
		MyOfficeDTO myOffice = MapperUtils.toDto(introduction, MyOfficeDTO.class);
		return myOffice;
	}

	@Override
	public ClinicDTO getMyClinic() {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		ClinicDTO result = MapperUtils.toDto(introductionList.get(0), ClinicDTO.class);
		return result;
	}

	@Override
	public ClinicDTO updateMyClinic(ClinicDTO clinicDTO) {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		Introduction introduction = new Introduction();
		if(introductionList != null && introductionList.size() > 0) {
			introduction = introductionList.get(0);
		}
		introduction.setClinic(clinicDTO.getClinic());
		introduction.setClinicImage(clinicDTO.getClinicImage());
		introduction = introductionRepository.save(introduction);
		ClinicDTO result = MapperUtils.toDto(introduction, ClinicDTO.class);
		return result;
	}

	@Override
	public IntroDTO updateMyIntro(IntroDTO introDTO) {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		Introduction introduction = new Introduction();
		if(introductionList != null && introductionList.size() > 0) {
			introduction = introductionList.get(0);
		}
		introduction.setMyIntro(introDTO.getMyIntro());
		introduction.setIntroImage(introDTO.getIntroImage());
		introduction.setIntroVideo(introDTO.getIntroVideo());
		introduction = introductionRepository.save(introduction);
		IntroDTO result = MapperUtils.toDto(introduction, IntroDTO.class);
		return result;
	}

	@Override
	public IntroDTO getMyIntro() {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		IntroDTO result = MapperUtils.toDto(introductionList.get(0), IntroDTO.class);
		return result;
	}

	@Override
	public MyDoctorDTO updateMyDoctor(MyDoctorDTO myDoctorDTO) {
		// TODO Auto-generated method stub
		
		List<Introduction> introductionList = introductionRepository.findAll();
		Introduction introduction = new Introduction();
		if(introductionList != null && introductionList.size() > 0) {
			introduction = introductionList.get(0);
		}
		introduction.setMyDoctor(myDoctorDTO.getMyDoctor());
		introduction.setMyDoctorImage(myDoctorDTO.getMyDoctorImage());
		introduction = introductionRepository.save(introduction);
		MyDoctorDTO result = MapperUtils.toDto(introduction, MyDoctorDTO.class);
		return result;
	}

	@Override
	public MyDoctorDTO getMyDoctor() {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		MyDoctorDTO result = MapperUtils.toDto(introductionList.get(0), MyDoctorDTO.class);
		return result;
	}

	@Override
	public MyCustomers updateMyCustomer(MyCustomers myCustomers) {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		Introduction introduction = new Introduction();
		if(introductionList != null && introductionList.size() > 0) {
			introduction = introductionList.get(0);
		}
		introduction.setCustomersService(myCustomers.getCustomersService());
		introduction.setCustomersServiceImage(myCustomers.getCustomersServiceImage());
		introduction = introductionRepository.save(introduction);
		MyCustomers result = MapperUtils.toDto(introduction, MyCustomers.class);
		return result;
	}

	@Override
	public MyCustomers getMyCustomer() {
		// TODO Auto-generated method stub
		List<Introduction> introductionList = introductionRepository.findAll();
		MyCustomers result = MapperUtils.toDto(introductionList.get(0), MyCustomers.class);
		return result;
	}

}
