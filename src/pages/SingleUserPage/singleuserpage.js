import React, {useEffect, useState} from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';

import styles from './SingleModule.css'
import usersService from "../../services/users.service";
import {UserInfo} from "../../components";

export const Singleuserpage = () => {
    const {state}=useLocation();
    const [user,setUser]=useState(state);
    const {userId}=useParams()

    useEffect(()=>{
        if (!state){
            usersService.getById(userId).then(({data})=>setUser(data))
        }else{
            setUser(state)
        }
    },[userId,state])


    return (
        <div>
            <div className={'single'}>
                {user
                    ? <UserInfo user={user}/> : 'Wait'
                }
            </div>
            <Outlet/>
        </div>
    );
};

