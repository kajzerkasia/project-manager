import React from "react";
import {Box, Typography} from "@mui/material";

function ErrorPage() {
    return (
        <Box sx={{marginTop: '2vh', display: 'flex', justifyContent: 'center'}}>
            <Typography>ERROR 404! PAGE NOT FOUND</Typography>
        </Box>
    )
}

export default ErrorPage;