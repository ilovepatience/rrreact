import {Link, Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <h3>Use api you want:</h3>
            <ul>
                <li><Link to="jsonplaceholder">JSONPlaceholder Users</Link></li>
                <li><Link to="dummyjson">DummyJSON Users</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};