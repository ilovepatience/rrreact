import './App.css'
import {LeftB} from "./components/component-lb/LeftB.tsx";
import {RightB} from "./components/component-rb/RightB.tsx";
import {MyContext} from "./context/ContextProvider.tsx";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<string>('light')
    return (
        <>
            <MyContext.Provider value={{
                theme: theme,
                changeTheme: (themeValue : string) => {
                    setTheme(themeValue);
                }
            }}>

                <LeftB/>
                <RightB/>


            </MyContext.Provider>

        </>
    )
}

export default App