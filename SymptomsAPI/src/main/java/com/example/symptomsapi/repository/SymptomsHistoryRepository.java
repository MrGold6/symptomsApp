package com.example.symptomsapi.repository;

import com.example.symptomsapi.entity.SymptomsHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SymptomsHistoryRepository extends JpaRepository<SymptomsHistory, String> {

}

