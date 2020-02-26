package com.example.tmv.service;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.tmv.dto.object_request.EditServiceInput;
import com.example.tmv.model.Image;
import com.example.tmv.model.Service;

public interface CustomerServiceService {
	Service updateService(Service service);
	
	String deleteService(Service service);
	
	Page<Service> getService(int pageNum,int pageSize);
	
	Image updateImageService(String serviceName ,Image image);
	
	Image updateCustomerImageService(String serviceName ,Image image);
	
	String deleteImageService(String serviceName ,Image image);
	
	String deleteCustomerImageService(String serviceName ,Image image);
}
