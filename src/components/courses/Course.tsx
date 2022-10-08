import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {ICourse} from "../../common/api/courses";
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Course = ({name, startDate, endDate}: ICourse) => {

    return (
        <Box sx={{marginTop: '2vh', display: 'flex', justifyContent: 'center'}}>
            <Button>{<ClearIcon></ClearIcon>}</Button>
            <div className="course">
                <Typography color="secondary">{name}</Typography>
                <small>{startDate} - {endDate}</small>
            </div>
            <Button>{<ModeEditIcon></ModeEditIcon>}</Button>
        </Box>
    );
};

export default Course;