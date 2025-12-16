import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {UsersComponentJsonplaceholder} from "../components/UsersComponents/UsersComponentJsonplaceholder.tsx";
import {UsersComponentDummyJson} from "../components/UsersComponents/UsersComponentDummyJson.tsx";
import {PostsComponentJsonplaceholder} from "../components/PostsComponents/PostsComponentJsonplaceholder.tsx";
import {PostsComponentDummyJson} from "../components/PostsComponents/PostsComponentDummyJson.tsx";
import {CommentsComponentJsonplaceholder} from "../components/CommentsComponents/CommentsComponentJsonplaceholder.tsx";
import {CommentsComponentDummyJson} from "../components/CommentsComponents/CommentsComponentDummyJson.tsx";
import {ProsuctsComponentJsonplaceholder} from "../components/ProductsComponents/ProsuctsComponentJsonplaceholder.tsx";
import {ProductsComponentDummyJson} from "../components/ProductsComponents/ProductsComponentDummyJson.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {
                path: "users", element: <UsersPage/>,
                children: [
                    {path: "jsonplaceholder", element: <UsersComponentJsonplaceholder/>},
                    {path: "dummyjson", element: <UsersComponentDummyJson/>}
                ],
            },
            {
                path: "posts", element: <PostsPage/>,
                children: [
                    {path: "jsonplaceholder", element: <PostsComponentJsonplaceholder/>},
                    {path: "dummyjson", element: <PostsComponentDummyJson/>}
                ]
            },
            {
                path: "comments", element: <CommentsPage/>,
                children: [
                    {path: "jsonplaceholder", element: <CommentsComponentJsonplaceholder/>},
                    {path: "dummyjson", element: <CommentsComponentDummyJson/>}
                ]
            },
            {
                path: "products", element: <ProductsPage/>,
                children: [
                    {path: "jsonplaceholder", element: <ProsuctsComponentJsonplaceholder/>},
                    {path: "dummyjson", element: <ProductsComponentDummyJson/>}
                ]
            }
        ]
    }
])