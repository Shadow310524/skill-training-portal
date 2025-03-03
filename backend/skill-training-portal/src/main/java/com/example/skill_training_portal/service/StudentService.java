package com.example.skill_training_portal.service;

import com.example.skill_training_portal.entity.Student;
import com.example.skill_training_portal.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    // ✅ Update Student Status (Verify/Reject)
    public Student updateStudentStatus(Long id, String status) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setStatus(status); // Set status dynamically
            return studentRepository.save(student);
        }
        return null; // Handle case where student is not found
    }
}
