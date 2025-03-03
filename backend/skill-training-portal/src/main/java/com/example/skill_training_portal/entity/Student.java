package com.example.skill_training_portal.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String course;
    private String status = "Pending"; // Default is Pending

    public Student() {}

    public Student(String name, String course, String status) {
        this.name = name;
        this.course = course;
        this.status = status;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
