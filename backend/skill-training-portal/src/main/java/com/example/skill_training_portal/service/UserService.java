package com.example.skill_training_portal.service;

import com.example.skill_training_portal.entity.User;
import com.example.skill_training_portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional<User> login(String email, String rawPassword) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.filter(u -> rawPassword.equals(u.getPassword())); // Simple password check (Not secure)
    }
}
