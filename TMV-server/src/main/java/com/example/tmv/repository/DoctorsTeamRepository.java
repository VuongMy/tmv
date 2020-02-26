package com.example.tmv.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;
import com.example.tmv.model.Doctor;
import com.example.tmv.model.User;

@Repository
public interface DoctorsTeamRepository extends MongoRepository<Doctor, Long>,QuerydslPredicateExecutor<Doctor>{
	Doctor findBy_id(ObjectId _id);
	
	
}
