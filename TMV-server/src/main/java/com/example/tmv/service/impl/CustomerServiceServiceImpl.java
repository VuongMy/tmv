package com.example.tmv.service.impl;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

import com.example.tmv.dto.object_request.EditServiceInput;
import com.example.tmv.model.Doctor;
import com.example.tmv.model.Image;
import com.example.tmv.model.QDoctor;
import com.example.tmv.model.QService;
import com.example.tmv.model.Service;
import com.example.tmv.repository.CustomerServiceRepository;
import com.example.tmv.service.CustomerServiceService;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;

@org.springframework.stereotype.Service
public class CustomerServiceServiceImpl implements CustomerServiceService {

	@Autowired
	CustomerServiceRepository customerServiceRepository;

	@Override
	public Service updateService(Service service) {
		// TODO Auto-generated method stub
		ObjectId id = service.get_id();
		Service serviceTmp = new Service();

		if (id != null) {
			serviceTmp = customerServiceRepository.findBy_id(id);
		}
		serviceTmp.setIntro(service.getIntro());
		serviceTmp.setName(service.getName());
		serviceTmp.setServiceImage(service.getServiceImage());
		serviceTmp.setCustomerImage(service.getCustomerImage());
		serviceTmp = customerServiceRepository.save(serviceTmp);
		return serviceTmp;
	}

	@Override
	public String deleteService(Service service) {
		// TODO Auto-generated method stub
		ObjectId id = service.get_id();
		Service serviceTmp = new Service();
		if (id != null) {
			serviceTmp = customerServiceRepository.findBy_id(id);
		}
		customerServiceRepository.delete(serviceTmp);
		return "success";
	}

	@Override
	public Page<Service> getService(int pageNum, int pageSize) {
		// TODO Auto-generated method stub

		PageRequest pageRequest = PageRequest.of(pageNum, pageSize);
		QService qService = QService.service;
		Predicate predicate = qService._id.isNotNull();

		Page<Service> pages = customerServiceRepository.findAll(predicate, pageRequest);
		return pages;
	}

	@Override
	public Image updateImageService(String serviceName, Image image) {
		// TODO Auto-generated method stub
		QService qService = QService.service;
		Predicate predicate = qService._id.isNotNull();
		predicate = ((BooleanExpression) predicate).and(qService.name.eq(serviceName));

		Iterator<Service> serviceList = customerServiceRepository.findAll(predicate).iterator();
		Service service = serviceList.next();
		String id = image.getId();
		System.out.println(id);
		Image imageService = new Image();
		imageService.init();
		if (id != null) {
			for (Image i : service.getServiceImage()) {
				if (i.getId().equals(id)) {
					i.setUrl(image.getUrl());
					service = customerServiceRepository.save(service);
					return i;
				}
			}
		}else {
			imageService.setUrl(image.getUrl());
			service.getServiceImage().add(imageService);
			service = customerServiceRepository.save(service);
			return imageService;
		}
		
		return null;
	}

	@Override
	public Image updateCustomerImageService(String serviceName, Image image) {
		// TODO Auto-generated method stub
		QService qService = QService.service;
		Predicate predicate = qService._id.isNotNull();
		predicate = ((BooleanExpression) predicate).and(qService.name.eq(serviceName));

		Iterator<Service> serviceList = customerServiceRepository.findAll(predicate).iterator();
		Service service = serviceList.next();
		String id = image.getId();
		System.out.println(id);
		Image imageService = new Image();
		imageService.init();
		if (id != null) {
			for (Image i : service.getCustomerImage()) {
				if (i.getId().equals(id)) {
					i.setUrl(image.getUrl());
					service = customerServiceRepository.save(service);
					return i;
				}
			}
		}else {
			imageService.setUrl(image.getUrl());
			service.getCustomerImage().add(imageService);
			service = customerServiceRepository.save(service);
			return imageService;
		}
		
		return null;
	}

	@Override
	public String deleteImageService(String serviceName, Image image) {
		// TODO Auto-generated method stub
		
		QService qService = QService.service;
		Predicate predicate = qService._id.isNotNull();
		predicate = ((BooleanExpression) predicate).and(qService.name.eq(serviceName));

		Iterator<Service> serviceList = customerServiceRepository.findAll(predicate).iterator();
		Service service = serviceList.next();
		String id = image.getId();
		System.out.println(id);
		Image imageService = new Image();
		imageService.init();
		if (id != null) {
			for (Image i : service.getServiceImage()) {
				if (i.getId().equals(id)) {
					service.getCustomerImage().remove(i);
					service = customerServiceRepository.save(service);
					return "success";
				}
			}
		}else {
			return "không có id";
		}
		
		return null;
	}

	@Override
	public String deleteCustomerImageService(String serviceName, Image image) {
		// TODO Auto-generated method stub
		
		QService qService = QService.service;
		Predicate predicate = qService._id.isNotNull();
		predicate = ((BooleanExpression) predicate).and(qService.name.eq(serviceName));

		Iterator<Service> serviceList = customerServiceRepository.findAll(predicate).iterator();
		Service service = serviceList.next();
		String id = image.getId();
		System.out.println(id);
		Image imageService = new Image();
		imageService.init();
		if (id != null) {
			for (Image i : service.getCustomerImage()) {
				if (i.getId().equals(id)) {
					service.getCustomerImage().remove(i);
					service = customerServiceRepository.save(service);
					return "success";
				}
			}
		}else {
			return "không có id";
		}
		
		return null;
	}

}
