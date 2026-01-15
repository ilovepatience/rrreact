import {useContext} from "react";
import {MyContext} from "../../context/ContextProvider.tsx";
import  './LeftBA.css'
export const LeftBA = () => {
    const {theme} = useContext(MyContext)

    return (
        <div>
        Left Block A

            <div className={theme}>Text showing changing theme</div>
        </div>
    );
};