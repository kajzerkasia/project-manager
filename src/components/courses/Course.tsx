import React from 'react';
import {Box, Button} from '@mui/material';
import {ICourse} from "../../common/api/courses";

const Course = ({name, startDate, endDate}: ICourse) => {

    return (
        <Box sx={{marginTop: '2vh', display: 'flex', justifyContent: 'center'}}>
            <div className="course">
                <Button size="large" color="secondary">{name}</Button>
                <small>{startDate} - {endDate}</small>
            </div>
        </Box>
    );
};

export default Course;