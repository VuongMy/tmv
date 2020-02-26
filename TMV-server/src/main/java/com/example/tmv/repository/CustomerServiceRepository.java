package com.example.tmv.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import com.example.tmv.model.Doctor;
import com.example.tmv.model.Service;

@Repository
public interface CustomerServiceRepository extends MongoRepository<Service, Long>,QuerydslPredicateExecutor<Service>{
	Service findBy_id(ObjectId _id);
}
