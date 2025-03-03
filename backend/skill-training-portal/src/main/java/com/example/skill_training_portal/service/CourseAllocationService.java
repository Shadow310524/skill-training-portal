package com.example.skill_training_portal.service;

import com.example.skill_training_portal.entity.Course;
import com.example.skill_training_portal.entity.CourseAllocation;
import com.example.skill_training_portal.repository.CourseAllocationRepository;
import com.example.skill_training_portal.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseAllocationService {
    private final CourseAllocationRepository allocationRepository;
    private final CourseRepository courseRepository;

    public CourseAllocationService(CourseAllocationRepository allocationRepository, CourseRepository courseRepository) {
        this.allocationRepository = allocationRepository;
        this.courseRepository = courseRepository;
    }

    public List<CourseAllocation> getAllAllocations() {
        return allocationRepository.findAll();
    }

    public CourseAllocation allocateCourse(Long courseId, String allocatedTo) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found"));

        CourseAllocation allocation = new CourseAllocation();
        allocation.setCourse(course);
        allocation.setAllocatedTo(allocatedTo);
        allocation.setSkillType(course.getSkillType());

        return allocationRepository.save(allocation);
    }
}
