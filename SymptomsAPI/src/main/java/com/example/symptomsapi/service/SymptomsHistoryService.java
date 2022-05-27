package com.example.symptomsapi.service;

import com.example.symptomsapi.entity.SymptomsHistory;
import com.example.symptomsapi.repository.SymptomsHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SymptomsHistoryService {

    @Autowired
    private SymptomsHistoryRepository symptomsHistoryRepository;

    public SymptomsHistory getById(String id) {
        Optional<SymptomsHistory> symptomsHistoryFromDb = symptomsHistoryRepository.findById(id);
        return symptomsHistoryFromDb.orElse(new SymptomsHistory());
    }
}
