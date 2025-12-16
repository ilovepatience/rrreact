import {Link, Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <>
            <h3>Use api you want:</h3>
            <ul>
                <li><Link to="jsonplaceholder">JSONPlaceholder Posts</Link></li>
                <li><Link to="dummyjson">DummyJSON Posts</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};