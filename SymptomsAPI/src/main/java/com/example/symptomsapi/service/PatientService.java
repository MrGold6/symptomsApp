package com.example.symptomsapi.service;

import com.example.symptomsapi.entity.Patient;
import com.example.symptomsapi.entity.SymptomsHistory;
import com.example.symptomsapi.entity.User;
import com.example.symptomsapi.repository.PatientRepository;
import com.example.symptomsapi.repository.SymptomsHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;

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
        symptomsHistory.setId(String.valueOf(patient.getSymptomsHistories().size()+1));
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
