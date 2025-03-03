package com.example.skill_training_portal.repository;

import com.example.skill_training_portal.entity.CourseAllocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseAllocationRepository extends JpaRepository<CourseAllocation, Long> {
}
