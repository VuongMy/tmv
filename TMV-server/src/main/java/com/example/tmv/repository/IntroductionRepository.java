package com.example.tmv.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.tmv.model.Introduction;

@Repository
public interface IntroductionRepository extends MongoRepository<Introduction, Long>{

}
