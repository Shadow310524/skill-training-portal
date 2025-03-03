package com.example.skill_training_portal.controller;

import com.example.skill_training_portal.entity.CourseAllocation;
import com.example.skill_training_portal.service.CourseAllocationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/allocations")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseAllocationController {
    private final CourseAllocationService allocationService;

    public CourseAllocationController(CourseAllocationService allocationService) {
        this.allocationService = allocationService;
    }

    @GetMapping("/all")
    public List<CourseAllocation> getAllAllocations() {
        return allocationService.getAllAllocations();
    }

    @PostMapping("/allocate")
    public CourseAllocation allocateCourse(@RequestBody Map<String, Object> payload) {
        Long courseId = ((Number) payload.get("courseId")).longValue();
        String allocatedTo = (String) payload.get("allocatedTo");

        return allocationService.allocateCourse(courseId, allocatedTo);
    }
}
