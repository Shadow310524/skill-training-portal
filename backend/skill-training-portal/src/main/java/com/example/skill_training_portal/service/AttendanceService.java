package com.example.skill_training_portal.service;

import com.example.skill_training_portal.entity.Attendance;
import com.example.skill_training_portal.entity.Student;
import com.example.skill_training_portal.repository.AttendanceRepository;
import com.example.skill_training_portal.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private StudentRepository studentRepository;

    public String markAttendance(Long studentId, boolean present) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Attendance attendance = new Attendance();
        attendance.setStudent(student);
        attendance.setDate(LocalDate.now());
        attendance.setPresent(present); // ✅ Ensures no null values

        attendanceRepository.save(attendance);
        return "Attendance marked successfully for " + student.getName();
    }
}
