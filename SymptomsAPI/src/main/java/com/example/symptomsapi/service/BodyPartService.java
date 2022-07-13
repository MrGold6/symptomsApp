package com.example.symptomsapi.service;

import com.example.symptomsapi.entity.BodyPart;
import com.example.symptomsapi.repository.BodyPartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BodyPartService {

    @Autowired
    private BodyPartRepository bodyPartRepository;

    public List<BodyPart> allBodyPart() {
        return bodyPartRepository.findAll();
    }

    public BodyPart getById(String id) {
        Optional<BodyPart> diseaseFromDb = bodyPartRepository.findById(id);
        return diseaseFromDb.orElse(new BodyPart());
    }

}
