class Course {
    constructor(id, number) {
        this.id = id;
        this.number = number;
    }
}

function adjustCourseNumbers(courses) {
    return courses.map(course => {
        if (course.number < 30) {
            return new Course(course.id, course.number + 10);
        } else if (course.number > 40) {
            return new Course(course.id, course.number - 10);
        } else {
            return course;
        }
    });
}

let courses = [
    new Course(1, 25),
    new Course(2, 35),
    new Course(3, 45)
];

let adjustedCourses = adjustCourseNumbers(courses);

console.log(adjustedCourses);
