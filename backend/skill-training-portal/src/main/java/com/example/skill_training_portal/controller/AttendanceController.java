package com.example.skill_training_portal.controller;

import com.example.skill_training_portal.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000") // Ensure frontend access
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @PostMapping("/{studentId}")
    public ResponseEntity<String> markAttendance(
            @PathVariable Long studentId,
            @RequestParam boolean present) {

        String response = attendanceService.markAttendance(studentId, present);
        return ResponseEntity.ok(response);
    }
}
