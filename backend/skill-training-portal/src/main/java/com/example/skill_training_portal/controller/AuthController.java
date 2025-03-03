package com.example.skill_training_portal.controller;

import com.example.skill_training_portal.entity.User;
import com.example.skill_training_portal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from React
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User loginRequest) {
        Optional<User> user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());

        if (user.isPresent()) {
            LoginResponse response = new LoginResponse(user.get().getEmail(), user.get().getRole());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Invalid credentials"));
        }
    }

    // DTO for successful login response
    static class LoginResponse {
        private String email;
        private User.Role role;

        public LoginResponse(String email, User.Role role) {
            this.email = email;
            this.role = role;
        }

        public String getEmail() { return email; }
        public User.Role getRole() { return role; }
    }

    // DTO for error response
    static class ErrorResponse {
        private String message;

        public ErrorResponse(String message) {
            this.message = message;
        }

        public String getMessage() { return message; }
    }
}
