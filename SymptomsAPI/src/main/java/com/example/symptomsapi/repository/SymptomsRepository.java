package com.example.symptomsapi.repository;

import com.example.symptomsapi.entity.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SymptomsRepository extends JpaRepository<Symptom, String> {

}

