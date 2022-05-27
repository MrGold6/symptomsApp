package com.example.symptomsapi.service;

import com.example.symptomsapi.entity.Patient;
import com.example.symptomsapi.entity.SymptomsHistory;
import com.example.symptomsapi.entity.User;
import com.example.symptomsapi.repository.PatientRepository;
import com.example.symptomsapi.repository.SymptomsHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private SymptomsHistoryRepository symptomsHistoryRepository;

    public void add(Patient patient) {
        patientRepository.save(patient);
    }

    public void addSymptomsHistories(SymptomsHistory symptomsHistory, Patient patient) {
        symptomsHistoryRepository.save(symptomsHistory);
        patient.addSymptomsHistory(symptomsHistory);
        patientRepository.save(patient);
    }

    public Patient patientByUser(User user) {
        Patient patient = null;
        try {
            patient = patientRepository.findByUser(user);

        } catch (NoResultException nre) {
        }

        return patient;
    }


}
