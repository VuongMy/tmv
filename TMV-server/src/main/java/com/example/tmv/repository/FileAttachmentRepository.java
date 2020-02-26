package com.example.tmv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.tmv.model.FileAttachment;

@Repository
public interface FileAttachmentRepository extends MongoRepository<FileAttachment, Long> {

}
