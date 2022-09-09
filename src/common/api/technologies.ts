import instance from './index';
import {AxiosResponse} from "axios";

export interface ITechnology {
    id: number;
    name: string;
}

export type NonIdentifiedTechnologyT = Omit<ITechnology, 'id'>;
export type NonIdentifiedPartialTechnologyT = Partial<NonIdentifiedTechnologyT>;

export async function getTechnologies(): Promise<AxiosResponse<ITechnology[]>> {
    return instance.get('technologies');
}

export async function addTechnology({name}: NonIdentifiedTechnologyT): Promise<AxiosResponse<ITechnology, NonIdentifiedTechnologyT>> {
    return instance.post('technologies', {name});
}

export async function updateTechnology(id: number, technology: NonIdentifiedPartialTechnologyT): Promise<AxiosResponse<ITechnology, NonIdentifiedTechnologyT>> {
    return instance.patch(`technologies/${id}`, technology);
}