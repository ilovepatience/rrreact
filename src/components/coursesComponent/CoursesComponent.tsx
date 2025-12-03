import {coursesAndDurationArray} from "../../../arrays-2.ts";
import type {ICourseModel} from "../../models/ICourseModel.ts";
import CourseComponent from "../courseComponent/CourseComponent.tsx";
import './CoursesComponent.css'

const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: ICourseModel, index) => {
                    return <CourseComponent key={index} course={course} />;
                })
            }
        </ul>
    );
};

export default CoursesComponent;
