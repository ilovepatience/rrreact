import {coursesArray} from "../../../arrays-2.ts";
import CourseArray from "../arrayCourse/CourseArray.tsx";
import type {ICoursesArrayModel} from "../../models/ICoursesArrayModel.ts";
import './CoursesArray.css'

const CoursesArray = () => {
    return (
        <div className="courses-array">
            {
                coursesArray.map((value: ICoursesArrayModel, index:number) => (
                    <CourseArray key={index} value={value} />
                ))
            }
        </div>
    );
};

export default CoursesArray;
