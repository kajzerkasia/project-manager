import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {ICourse} from "../../common/api/courses";

const Course = ({name, startDate, endDate}: ICourse) => {

    return (
        <Box sx={{marginTop: '2vh', display: 'flex', justifyContent: 'center'}}>
            <div className="course">
                <Typography color="secondary">{name}</Typography>
                <small>{startDate} - {endDate}</small>
            </div>
        </Box>
    );
};

export default Course;