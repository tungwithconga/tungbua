class Student1 {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(studentId: number, studentName: string) {
        this.id = studentId;
        this.name = studentName;
        this.enrolledCourses = [];
    }
    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }
}
class Course1 {
    id: number;
    name: string;
    constructor(CourseId: number, CourseName: string) {
        this.id = CourseId;
        this.name = CourseName;
    }
    createCourse(tittle: string): Course {
        return new Course(tittle);
    }
    createLesson(tittle: string): Lesson {
        return new Lesson(tittle);
    }
    createAssignment(tittle: string): Assignment {
        return new Assignment(tittle);
    }
    createAssessment(tittle: string): Assessment {
        return new Assessment(tittle);
    }
}
class Course {
    tittle: string;
    Course: Course;
    baiGiang: Lesson[];
    hop: Assessment[];
    constructor(tittle: string, Course: Course) {
        this.tittle = tittle;
        this.Course = Course;
        this.baiGiang = [];
        this.hop = [];
    }
    addLesson(lesson: Lesson): void {
        this.baiGiang.push(lesson);
    }
    addAssessment(assessment: Assessment): void {
        this.hop.push(assessment);
    }
}
class Lesson {
    tittle: string;
    assignments: string[];
    constructor(tittle: string) {
        this.tittle = tittle;
        this.assignments = [];
    }
}
class Assignment {
    tittle: string;
    constructor(tittle: string) {
        this.tittle = tittle;
    }
}
class Assessment {
    tittle: string;
    constructor(tittle: string) {
        this.tittle = tittle;
    }
}
