package com.example.skill_training_portal.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "attendance")
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private Boolean present; // ✅ Ensures no null values

    // Constructors
    public Attendance() {}

    public Attendance(Student student, LocalDate date, Boolean present) {
        this.student = student;
        this.date = date;
        this.present = present;
    }

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Student getStudent() { return student; }

    public void setStudent(Student student) { this.student = student; }

    public LocalDate getDate() { return date; }

    public void setDate(LocalDate date) { this.date = date; }

    public Boolean getPresent() { return present; }

    public void setPresent(Boolean present) { this.present = present; }
}
