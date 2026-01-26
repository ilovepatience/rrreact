import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <>
            <div><Link to={'users'}>users</Link></div>
            <div><Link to={'posts'}>posts</Link></div>
            <div><Link to={'comments'}>comments</Link></div>
            <div><Link to={'complex'}>complex</Link></div>
        </>
    );
};