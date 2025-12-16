import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./components/menu/Menu.tsx";

function App() {

  return (
    <>
        <Menu/>
      App component
        <hr/>
        <Outlet/>
    </>
  )
}

export default App