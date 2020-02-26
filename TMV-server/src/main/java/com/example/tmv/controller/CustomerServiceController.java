package com.example.tmv.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.tmv.common.StandardResponse;
import com.example.tmv.dto.object_request.EditServiceInput;
import com.example.tmv.model.Doctor;
import com.example.tmv.model.Image;
import com.example.tmv.model.Service;
import com.example.tmv.payload.SignUpRequest;
import com.example.tmv.service.CustomerServiceService;

@RestController
@RequestMapping("/api/service")
public class CustomerServiceController {
	
	
	@Autowired
	CustomerServiceService customerServiceService;
	
	@PostMapping("/update-service")
	public Service updateService(@RequestBody Service service) {
		return customerServiceService.updateService(service);
	}
	
	@DeleteMapping("/update-service")
	public String deleteService(@RequestBody Service service) {
		
		String result = customerServiceService.deleteService(service);
		return result;
	}
	
	@GetMapping("/get-service")
	public Page<Service> getService(@RequestParam(value = "pageNum", required = false, defaultValue = "0") int pageNum,
            @RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize) {
		
		Page<Service> result = customerServiceService.getService(pageNum,pageSize);	
		return result;
	}
	
	@PostMapping("/update-image-service/{serviceName}")
	public Image updateImageService(@PathVariable String serviceName ,@RequestBody Image image) {
		
		Image result = customerServiceService.updateImageService(serviceName,image);	
		return result;
	}
	
	@PostMapping("/update-customer-image-service/{serviceName}")
	public Image updateCustomerImageService(@PathVariable String serviceName ,@RequestBody Image image) {
		
		Image result = customerServiceService.updateCustomerImageService(serviceName,image);	
		return result;
	}
	
	@DeleteMapping("/delete-image-service/{serviceName}")
	public String deleteImageService(@PathVariable String serviceName ,@RequestBody Image image) {
		
		String result = customerServiceService.deleteImageService(serviceName,image);
		return result;
	}
	
	@DeleteMapping("/delete-customer-image-service/{serviceName}")
	public String deleteCustomerImageService(@PathVariable String serviceName ,@RequestBody Image image) {
		
		String result = customerServiceService.deleteCustomerImageService(serviceName,image);
		return result;
	}
	
}
