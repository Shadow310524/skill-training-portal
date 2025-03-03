package com.example.skill_training_portal.controller;

import com.example.skill_training_portal.entity.Student;
import com.example.skill_training_portal.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000") // React Frontend Access
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }

    // ✅ Verify Student
    @PutMapping("/{id}/verify")
    public Student verifyStudent(@PathVariable Long id) {
        return studentService.updateStudentStatus(id, "Verified");
    }

    // ❌ Reject Student
    @PutMapping("/{id}/reject")
    public Student rejectStudent(@PathVariable Long id) {
        return studentService.updateStudentStatus(id, "Rejected");
    }
}
