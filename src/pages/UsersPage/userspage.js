import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';

import styles from './UsersModule.css'
import usersService from "../../services/users.service";
import {User} from "../../components";


export const Userspage = () => {
    const [users,setUsers]=useState(null);
    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div className={'flex'}>
            <div className={'users'}>

                {
                    users ? users.map((user) => <User key={user.id} user={user}/>) : 'Wait'
                }
            </div>
            <Outlet/>
        </div>
    );
};

