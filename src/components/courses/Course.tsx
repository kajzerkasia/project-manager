import React from 'react';
import {Box, Button} from '@mui/material';
import {ICourse} from "../../common/api/courses";

const Course = ({name}: ICourse) => {

    return (
        <Box sx={{marginTop: '2vh', display: 'flex', justifyContent: 'center'}}>
            <div className="course">
                <Button color="secondary">{name}</Button>
            </div>
        </Box>
    );
};

export default Course;