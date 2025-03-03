package com.example.skill_training_portal.repository;

import com.example.skill_training_portal.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
