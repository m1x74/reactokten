import React, {useEffect, useState} from 'react';
import {Outlet,useLocation, useParams} from "react-router-dom";

import {Comments} from "../../components";
import commentsService from "../../services/comments.service";
import styles from './ComModule.css'

export const Commentpage = () => {
    const [comments,setComments]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        commentsService.getByPostId(id).then(({data})=>setComments(data))
    },[id])
    return (
        <div>
            <div className={'comments'}>
                {
                    comments.map(comment=><Comments key={comment.id} comment={comment}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

