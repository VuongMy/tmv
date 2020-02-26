package com.example.tmv.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.tmv.model.Home;
import com.example.tmv.model.User;

@Repository
public interface HomeRepository extends MongoRepository<Home, Long>{
	
}
