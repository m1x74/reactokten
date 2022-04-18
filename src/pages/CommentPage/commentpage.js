import React, {useEffect, useState} from 'react';
import {Outlet,useLocation, useParams} from "react-router-dom";
import {commentsService} from "../../services";
import {Comments} from "../../components";

export const Commentpage = () => {
    const [comments,setComments]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        commentsService.getByPostId(id).then(({data})=>setComments(data))
    })
    return (
        <div>
            <div>
                {
                    comments.map(comment=><Comments key={comment.id} comments={comments}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

