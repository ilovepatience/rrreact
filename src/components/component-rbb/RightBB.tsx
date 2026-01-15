import {useContext} from "react";
import {MyContext} from "../../context/ContextProvider.tsx";

export const RightBB = () => {

    const {changeTheme} = useContext(MyContext)
    const someHandler1 = () => {
        changeTheme("dark");
    }
    const someHandler2 = () => {
        changeTheme("light");
    }

    return (
        <div>
            Right Block B

            <div>

                <button onClick={someHandler1}>Changing theme to dark:</button>
                <button onClick={someHandler2}>Changing theme to light:</button>

            </div>

        </div>
    );
};