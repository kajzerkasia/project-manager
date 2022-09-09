import React from 'react';
import {Box, Button} from '@mui/material';
import {ITechnology} from "../../common/api/technologies";
import {Link} from "react-router-dom";

const Technology = ({name, id}: ITechnology) => {
    return (
        <Box sx={{marginTop: '2vh', display: 'flex', justifyContent: 'center'}}>
            <div className="technology">
                <Link to={`/technology/${id}/courses`}>
                    <Button color="secondary">{name}</Button>
                </Link>
            </div>
        </Box>
    );
};

export default Technology;