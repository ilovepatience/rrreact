import './App.css'
import {Menu} from "./components/menu/Menu.tsx";
import {Outlet} from "react-router/internal/react-server-client";

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App