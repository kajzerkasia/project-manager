import Technology from "./Technology";
import { Box, Typography } from '@mui/material/';
import {ITechnology} from "../../common/api/technologies";

export type TechnologyListPropsT = {
    technologies: ITechnology[];
}

const TechnologiesList = ({technologies} : TechnologyListPropsT) => {

    return (
        <>
            <Box className='technologies'>
                <Typography sx={{marginTop: '10vh', marginBottom: '5vh', display: 'flex', justifyContent: 'center'}}>Technologies</Typography>
                {technologies.map(technology => <Technology key={technology.id} id={technology.id} name={technology.name}/>)}
            </Box>
        </>
    );
};

export default TechnologiesList;