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

    // ✅ Fetch all students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // ✅ Add a new student
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    // ✅ Delete student by ID
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    // ✅ Update student status (e.g., "Verified", "Pending")
    public Student updateStudentStatus(Long id, String status) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setStatus(status);
            return studentRepository.save(student);
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }

    // ✅ Fetch student by ID
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }
}
