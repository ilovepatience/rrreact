import {Link} from "react-router";

export const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/cars">Cars info</Link>
                </li>
                <li>
                    <Link to="/cars/create">Car create</Link>
                </li>
            </ul>
        </>
    );
};