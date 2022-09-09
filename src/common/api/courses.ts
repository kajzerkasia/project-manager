import instance from './index';
import {AxiosResponse} from "axios";

export interface ICourse {
    name: string;
    startDate?: string;
    endDate?: string;
    technologyId: number;
    id: number;
}

export type NonIdentifiedCourseT = Omit<ICourse, 'id'>;
export type NonIdentifiedPartialCourseT = Partial<NonIdentifiedCourseT>;

export async function getCourses(filters = {}) {
    return instance.get('courses', {
        params: filters
    });
}

export async function addCourse(course: NonIdentifiedCourseT): Promise<AxiosResponse<ICourse, NonIdentifiedCourseT>> {
    return instance.post('courses', course);
}

export async function updateCourse(id: number, course: NonIdentifiedPartialCourseT): Promise<AxiosResponse<ICourse, NonIdentifiedPartialCourseT>> {
    return instance.patch(`courses/${id}`, course);
}
