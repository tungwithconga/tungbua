"use strict";
class Student1 {
    constructor(studentId, studentName) {
        this.id = studentId;
        this.name = studentName;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Course1 {
    constructor(CourseId, CourseName) {
        this.id = CourseId;
        this.name = CourseName;
    }
    createCourse(tittle) {
        return new Course(tittle);
    }
    createLesson(tittle) {
        return new Lesson(tittle);
    }
    createAssignment(tittle) {
        return new Assignment(tittle);
    }
    createAssessment(tittle) {
        return new Assessment(tittle);
    }
}
class Course {
    constructor(tittle, Course) {
        this.tittle = tittle;
        this.Course = Course;
        this.baiGiang = [];
        this.hop = [];
    }
    addLesson(lesson) {
        this.baiGiang.push(lesson);
    }
    addAssessment(assessment) {
        this.hop.push(assessment);
    }
}
class Lesson {
    constructor(tittle) {
        this.tittle = tittle;
        this.assignments = [];
    }
}
class Assignment {
    constructor(tittle) {
        this.tittle = tittle;
    }
}
class Assessment {
    constructor(tittle) {
        this.tittle = tittle;
    }
}
