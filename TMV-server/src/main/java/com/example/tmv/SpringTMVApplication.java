package com.example.tmv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.example.tmv.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class SpringTMVApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringTMVApplication.class, args);
	}
}
