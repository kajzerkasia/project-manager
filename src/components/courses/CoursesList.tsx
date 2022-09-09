import Course from "./Course";
import { Box, Typography } from '@mui/material/';
import {ICourse} from "../../common/api/courses";

type CourseListPropsT = {
    courses: ICourse[];
}

const CoursesList = ({courses} : CourseListPropsT) => {

    return (
        <>
            <Box className='active-courses'>
                <Typography sx={{marginTop: '10vh', marginBottom: '5vh', display: 'flex', justifyContent: 'center'}}>Courses</Typography>
                {courses.map(course => <Course key={course.id} technologyId={course.technologyId} name={course.name} startDate={course.startDate} endDate={course.endDate} id={course.id} /> )}
            </Box>
        </>
    );
};

export default CoursesList;