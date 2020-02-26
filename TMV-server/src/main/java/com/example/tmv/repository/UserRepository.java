package com.example.tmv.repository;

import org.bson.types.ObjectId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.tmv.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);
    
//    @Query(value = "SELECT * FROM users WHERE email = :usernameOrEmail OR username = :usernameOrEmail" , nativeQuery = true)
//    List<User> findByEmailOrUserName(@Param("usernameOrEmail") String usernameOrEmail);      
    
    List<User> findByUsername(String username);
    
    User findByid(ObjectId _id);
}
