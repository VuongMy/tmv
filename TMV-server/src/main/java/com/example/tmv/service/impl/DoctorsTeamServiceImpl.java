package com.example.tmv.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.example.tmv.exception.ErrorException;
import com.example.tmv.model.Doctor;
import com.example.tmv.model.QDoctor;
import com.example.tmv.repository.DoctorsTeamRepository;
import com.example.tmv.service.DoctorsTeamService;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;

@Service
public class DoctorsTeamServiceImpl implements DoctorsTeamService{
	
	@Autowired
	DoctorsTeamRepository doctorsTeamRepository;
	
	@Override
	public Page<Doctor> getDoctorsTeam(int pageNum,int pageSize) {
		// TODO Auto-generated method stub
		Sort sort = null;
		sort = new Sort(Direction.fromString("desc"), "createDate");

		PageRequest pageRequest = PageRequest.of(pageNum, pageSize, sort);
		QDoctor qDoctor = QDoctor.doctor;
		Predicate predicate = qDoctor._id.isNotNull();
		
		Page<Doctor> pages = doctorsTeamRepository.findAll(predicate, pageRequest);
		return pages;
	}



	@Override
	public Doctor updateDoctor(Doctor doctor) {
		// TODO Auto-generated method stub
		ObjectId id = doctor.get_id();
		Doctor doctorTmp = new Doctor();
		doctorTmp.setCreateDate(new Date());
		if(id != null) {
			doctorTmp = doctorsTeamRepository.findBy_id(id);
		}
		doctorTmp.setImage(doctor.getImage());
		doctorTmp.setIntro(doctor.getIntro());
		doctorTmp.setName(doctor.getName());
		doctorTmp = doctorsTeamRepository.save(doctorTmp);
		return doctorTmp;
	}



	@Override
	public String deleteDoctor(Doctor doctor) {
		// TODO Auto-generated method stub
		ObjectId id = doctor.get_id();
		Doctor doctorTmp = new Doctor();
		doctorTmp.setCreateDate(new Date());
		if(id != null) {
			doctorTmp = doctorsTeamRepository.findBy_id(id);
		}
		doctorsTeamRepository.delete(doctorTmp);
		return "success";
	}

}
