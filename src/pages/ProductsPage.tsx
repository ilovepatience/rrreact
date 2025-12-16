import {Link, Outlet} from "react-router-dom";

export const ProductsPage = () => {
    return (
        <>
            <h3>Use api you want:</h3>
            <ul>
                <li><Link to="jsonplaceholder">JSONPlaceholder Products</Link></li>
                <li><Link to="dummyjson">DummyJSON Products</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};