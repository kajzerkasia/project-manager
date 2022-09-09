import React, {useEffect, useState} from 'react';
import {addTechnology, getTechnologies, ITechnology} from "../../common/api/technologies";
import TechnologiesList from "./TechnologiesList";
import AddTechnology, {AddTechnologyPropsT} from "./AddTechnology";

const TechnologyManager = () => {
    const [technologies, setTechnologies] = useState<ITechnology[]>([]);

    const loadTechnologies = () => {
        getTechnologies().then(response => {
            setTechnologies(response.data)
        });
    }

    const onNewTechnologySubmit: AddTechnologyPropsT['onNewTechnologySubmit'] = async ({name}) => {
        await addTechnology({name})
        loadTechnologies()
    }

    useEffect(() => {
        loadTechnologies()
    }, []);

    return (
        <div>
            <AddTechnology onNewTechnologySubmit={onNewTechnologySubmit}/>
            <TechnologiesList technologies={technologies}/>
        </div>
    );
};

export default TechnologyManager;
