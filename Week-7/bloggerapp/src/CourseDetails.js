function CourseDetails() {

    const courses = [
        { id: 1, course: "ReactJS", duration: "6 Weeks" },
        { id: 2, course: "Java Full Stack", duration: "12 Weeks" }
    ];

    return (
        <div>
            <h2>Course Details</h2>

            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.course} - {course.duration}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetails;