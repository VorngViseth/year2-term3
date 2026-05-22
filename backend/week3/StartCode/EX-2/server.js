// server.js
import express from 'express';
import courses from "./course.js";
import logger from "./logger.js";
import validateCourseQueryParams from "./validateQuery.js";
import auth from './auth.js';

const app = express();
app.use(express.json());
const PORT = 3000;

app.use (logger);
app.use(auth);

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', validateCourseQueryParams, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria

    let filteredCourse = courses.filter(course => course.department === dept);

    if(level) filteredCourse = filteredCourse.filter(course => course.level === level);
    if(semester) filteredCourse = filteredCourse.filter(course => course.semester === semester);
    if(instructor) filteredCourse = filteredCourse.filter(course => course.instructor === instructor);

    if(minCredits) filteredCourse = filteredCourse.filter(course => course.credits >= minCredits);
    if(maxCredits) filteredCourse = filteredCourse.filter(course => course.credits <= maxCredits);
    

    res.send(filteredCourse);
    console.log(filteredCourse);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
