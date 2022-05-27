package com.example.symptomsapi.repository;

import com.example.symptomsapi.entity.BodyPart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BodyPartRepository extends JpaRepository<BodyPart, String> {

}
