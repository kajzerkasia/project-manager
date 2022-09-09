import React, { useState } from 'react';
import {Box, Button, TextField} from "@mui/material";

export type AddTechnologyPropsT = {
    onNewTechnologySubmit: (payload: {name: string}) => Promise<void>;
}

const AddTechnology = ({onNewTechnologySubmit}:AddTechnologyPropsT) => {
    const [newTechnology, setNewTechnology] = useState('');

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTechnology(event.target.value);
    };

    const submitHandler = async () => {
        await onNewTechnologySubmit({
            name: newTechnology,
        })
        setNewTechnology('');
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <Box sx={{marginTop: '2vh', display: 'flex', justifyContent: 'center'}}>
                    <TextField color='secondary' sx={{ width: '50vw'}} value={newTechnology} onInput={inputHandler} size='small'></TextField>
                    <Button onClick={submitHandler} color='secondary' variant='contained' size='medium'>
                        add new technology
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default AddTechnology;