import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <>
        <h3>Use api you want:</h3>
            <ul>
                <li><Link to="jsonplaceholder">JSONPlaceholder Comments</Link></li>
                <li><Link to="dummyjson">DummyJSON Comments</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};