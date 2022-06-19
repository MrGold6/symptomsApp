package com.example.symptomsapi.controller;

import com.example.symptomsapi.entity.*;
import com.example.symptomsapi.service.PatientService;
import com.example.symptomsapi.service.SymptomsHistoryService;
import com.example.symptomsapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    protected PatientService patientService;

    @Autowired
    protected SymptomsHistoryService symptomsHistoryService;

    @Autowired
    protected UserService userService;

    public Patient getAuthPatient() {
        User user = userService.loadUserByUsername("patient");
        return patientService.patientByUser(user);
    }

    @GetMapping("/getUserInfo")
    public ResponseEntity<Patient> userInfo() {
        return new ResponseEntity<>(getAuthPatient(), HttpStatus.OK);
    }

    @GetMapping("/getUserSex")
    public ResponseEntity<Integer> userSex() {
        return new ResponseEntity<>(getAuthPatient().getSex(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Patient> addSymptomsHistory(@RequestBody SymptomsHistory symptomsHistory) {
        patientService.addSymptomsHistories(symptomsHistory, getAuthPatient());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/symptoms_history/{id}")
    public ResponseEntity<SymptomsHistory> addSymptomsHistoryById(@PathVariable String id) {
        return new ResponseEntity<>(symptomsHistoryService.getById(id), HttpStatus.OK);
    }

}
