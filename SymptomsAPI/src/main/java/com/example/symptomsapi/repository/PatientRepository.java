package com.example.symptomsapi.repository;

import com.example.symptomsapi.entity.Patient;
import com.example.symptomsapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    Patient findByUser(User user);
}
