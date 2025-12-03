import './App.css'
import {coursesTitleArray} from "../arrays-2.ts";
import CoursesComponent from "./components/coursesComponent/CoursesComponent.tsx";
import FamilyComponent from "./components/familyComponent/FamilyComponent.tsx";
import CoursesArray from "./components/arrayCourses/CoursesArray.tsx";

function App() {
  return (
    <>
      {
        coursesTitleArray.map((title, index) => (
              <li key={index}>{title}</li>
        ))
      }
      {
       <CoursesComponent/>
      }

      {
        <FamilyComponent/>
      }
      {
        <CoursesArray/>
      }
    </>
  )

}
export default App

