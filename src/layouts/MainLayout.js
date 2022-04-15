import React from 'react';
import {Outlet,Link,useNavigate,NavLink} from "react-router-dom";

import {styles} from './Module.css'


const MainLayout = () => {
const nav=useNavigate()


    return (

        <div>
            <div className={'header'}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;