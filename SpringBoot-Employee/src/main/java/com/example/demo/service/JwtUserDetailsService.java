package com.example.demo.service;

import java.util.ArrayList;

import com.example.demo.repository.*;
import com.example.demo.model.user.UserDTO;
import com.example.demo.model.DAOUser;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
	private UserRepository userDao;

	@Autowired
    private PasswordEncoder bcryptEncoder;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
    }

    public DAOUser save(UserDTO user) {
		try {
			DAOUser newUser = new DAOUser();
			newUser.setUsername(user.getUsername());
			newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
			return userDao.save(newUser);
		} catch (DataIntegrityViolationException e) {
			throw e;
		}
	}
    
}