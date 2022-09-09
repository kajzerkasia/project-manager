import React, { useState } from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import {ICourse} from "../../common/api/courses";

import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export type AddCoursePropsT = {
    onNewCourseSubmit: (payload: ICourse) => Promise<void>;
}

const AddCourse = ({onNewCourseSubmit}:AddCoursePropsT) => {
    const [newCourse, setNewCourse] = useState('');
    const { id } = useParams()

    const [startDateValue, setStartDateValue] = React.useState<Dayjs | null>(
        dayjs(),
    );

    const [endDateValue, setEndDateValue] = React.useState<Dayjs | null>(
        dayjs(),
    );

    const handleStartDateChange = (newValue: Dayjs | null) => {
        setStartDateValue(newValue);
    };

    const handleEndDateChange = (newValue: Dayjs | null) => {
        setEndDateValue(newValue);
    };

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewCourse(event.target.value);
    };

    const submitHandler = async () => {
        if (id !== undefined) {
            await onNewCourseSubmit({
                name: newCourse,
                technologyId: +id,
                startDate: startDateValue?.format("MM/DD/YYYY") ?? undefined,
                endDate: endDateValue?.format("MM/DD/YYYY") ?? undefined,
                id: +id,
            })
        }
        setNewCourse('');
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <Box sx={{marginTop: '2vh', marginLeft: '45vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '10vw'}}>
                    <TextField color='secondary' sx={{width: '50vw', marginBottom: '2vh'}} value={newCourse} onInput={inputHandler} size='small'></TextField>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>

                            <DesktopDatePicker className="datepicker"
                                               label="Start date"
                                               inputFormat="MM/DD/YYYY"
                                               value={startDateValue}
                                               onChange={handleStartDateChange}
                                               renderInput={(params) => <TextField {...params} />}
                            />
                            <DesktopDatePicker className="datepicker"
                                               label="End date"
                                               inputFormat="MM/DD/YYYY"
                                               value={endDateValue}
                                               onChange={handleEndDateChange}
                                               renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <Button sx={{marginTop: '2vh', height: '7vh'}} onClick={submitHandler} color='secondary' variant='contained' size='medium'>
                        add new course
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default AddCourse;