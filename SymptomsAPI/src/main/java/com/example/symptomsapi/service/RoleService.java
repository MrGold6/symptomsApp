package com.example.symptomsapi.service;

import com.example.symptomsapi.entity.Role;
import com.example.symptomsapi.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Transactional
    public List<Role> allRole() {
        return roleRepository.findAll();
    }

    @Transactional
    public void add(Role role) {
        roleRepository.save(role);
    }

    @Transactional
    public void delete(Role role) {
        roleRepository.delete(role);
    }

    public boolean checkId(int id) {
        Optional<Role> roleFromDb = roleRepository.findById(id);
        return !roleFromDb.isPresent();
    }

    public Role getById(int id) {

        Optional<Role> roleFromDb = roleRepository.findById(id);
        return roleFromDb.orElse(new Role());

    }
}
