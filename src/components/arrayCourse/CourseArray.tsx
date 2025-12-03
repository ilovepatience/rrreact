import type {ICoursesArrayModel} from "../../models/ICoursesArrayModel";
import './CourseArray.css'

type Props = {
    value: ICoursesArrayModel;
};

const CourseArray = ({ value }: Props) => {
    return (
        <div className="course-array">
            <h4>Title - {value.title}</h4>
            <p>Month course Duration: {value.monthDuration}, Hour course Duration: {value.hourDuration}</p>
            <p>Modules: {value.modules.map((m, index) => (
                <li key={index}>- {m}</li>
            ))}
            </p>

        </div>
    );
};

export default CourseArray;
