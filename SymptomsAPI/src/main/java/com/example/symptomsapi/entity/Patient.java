package com.example.symptomsapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "electronic_card")
public class Patient extends Human {

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    private int blood_type;
    private String chronic_disease;
    private String allergic_history;
    private String Rh;
    @OneToMany
    public List<SymptomsHistory> symptomsHistories = new ArrayList<>();

    public void addSymptomsHistory(SymptomsHistory symptomsHistory) {
        this.symptomsHistories.add(symptomsHistory);
    }
}
