import './CourseComponent.css'
import type {FC} from "react";
import type {ICourseModel} from "../../models/ICourseModel.ts";

type PropType = {
    course: ICourseModel;
};

const CourseComponent: FC<PropType> = ({ course }) => {
    return (
        <li>
            {course.title} - {course.monthDuration}
        </li>
    );
};

export default CourseComponent;
