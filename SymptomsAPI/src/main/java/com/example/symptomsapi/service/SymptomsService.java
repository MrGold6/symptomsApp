package com.example.symptomsapi.service;

import com.example.symptomsapi.entity.BodyPart;
import com.example.symptomsapi.entity.Symptom;
import com.example.symptomsapi.repository.BodyPartRepository;
import com.example.symptomsapi.repository.SymptomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SymptomsService {

    @Autowired
    private BodyPartRepository bodyPartRepository;

    @Autowired
    private SymptomsRepository symptomsRepository;

    public List<Symptom> allSymptoms() {
        return symptomsRepository.findAll();
    }

    public void addSymptom(Symptom symptom, String bodyPartId) {
        symptomsRepository.save(symptom);
        BodyPart bodyPart = bodyPartRepository.getById(bodyPartId);
        bodyPart.addSymptom(symptom);
        bodyPartRepository.save(bodyPart);
    }
}
