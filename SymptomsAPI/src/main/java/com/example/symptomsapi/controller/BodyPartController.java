package com.example.symptomsapi.controller;

import com.example.symptomsapi.entity.BodyPart;
import com.example.symptomsapi.service.BodyPartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/body_part")
public class BodyPartController {

    @Autowired
    protected BodyPartService bodyPartService;

    @GetMapping
    public ResponseEntity<List<BodyPart>> allBodyPart() {
        return new ResponseEntity<>(bodyPartService.allBodyPart(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BodyPart> getBodyPartById(@PathVariable String id) {
        return new ResponseEntity<>(bodyPartService.getById(id), HttpStatus.OK);
    }

}
