import React, {useEffect, useState} from 'react';
import {Outlet,useLocation, useParams} from "react-router-dom";

import postService from "../../services/post.service";
import {PostInfo} from "../../components";
import styles from './SinglePostModule.css'

export const Singlepostpage = () => {
    const {state}=useLocation();
    const {id}=useParams()
    const [post,setPost]=useState([])
    useEffect(()=>{
        if (!state){
            postService.getById(id).then(({data})=>setPost(data))
        }else {
            setPost(state)
        }

    },[id,state])

    return (
        <div>
            <div className={'singlepost'}>
                {
                    post && <PostInfo post={post}/>
                }
            </div>
            <Outlet/>
        </div>
    );
};

