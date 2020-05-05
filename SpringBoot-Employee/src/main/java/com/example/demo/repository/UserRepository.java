package com.example.demo.repository;

import com.example.demo.model.DAOUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<DAOUser, Integer> {
    DAOUser findByUsername(String username);
}