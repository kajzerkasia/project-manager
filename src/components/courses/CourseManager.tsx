import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CoursesList from "./CoursesList";
import {addCourse, getCourses, ICourse} from "../../common/api/courses";
import AddCourse, {AddCoursePropsT} from "./AddCourse";

const CourseManager = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const { id } = useParams()

    const loadCourses = () => {
        if (id !== undefined && Number.isSafeInteger(+id)) {
            getCourses({
                technologyId: +id,
            }).then(response => {
                setCourses(response.data)
            });
        }
    }

    const onNewCourseSubmit: AddCoursePropsT['onNewCourseSubmit'] = async ({name, startDate, endDate}) => {
        if (id !== undefined && Number.isSafeInteger(+id)) {
            await addCourse({
                name,
                technologyId: +id,
                startDate,
                endDate,
            })
            loadCourses()
        }
    }

    useEffect(() => {
        loadCourses();
    }, [id]);


    return (
        <div>
            <AddCourse onNewCourseSubmit={onNewCourseSubmit}/>
            <CoursesList courses={courses} />
        </div>
    );
};

export default CourseManager;
