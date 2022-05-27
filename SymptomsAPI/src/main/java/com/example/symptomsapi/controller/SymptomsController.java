package com.example.symptomsapi.controller;

import com.example.symptomsapi.entity.Patient;
import com.example.symptomsapi.entity.Symptom;
import com.example.symptomsapi.service.PatientService;
import com.example.symptomsapi.service.SymptomsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/symptoms")
public class SymptomsController {

    @Autowired
    protected SymptomsService symptomsService;

    @GetMapping
    public ResponseEntity<List<Symptom>> allSymptoms() {
        return new ResponseEntity<>(symptomsService.allSymptoms(), HttpStatus.OK);
    }

    @PostMapping("/{bodyPartId}")
    public ResponseEntity<?> addSymptom(@RequestBody Symptom symptom, @PathVariable String bodyPartId) {
        symptomsService.addSymptom(symptom, bodyPartId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
