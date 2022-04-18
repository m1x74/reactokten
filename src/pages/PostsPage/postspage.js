import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import styles from './PostsModule.css'
import postService from "../../services/post.service";
import {Post} from "../../components";

export const Postspage = () => {
    const [posts, setPosts] = useState([]);
    const {userId} = useParams()

    useEffect(() => {
        if (userId) {
            postService.getByUserId(userId).then(({data}) => setPosts(data))
        } else {
            postService.getAll().then(({data}) => setPosts(data))
        }

    }, [userId])

    return (
        <div className={'rr'}>
            <div className={'posts'}>
                {
                   posts.map(post=><Post key={post.id} post={post} flag={!userId}/>)
                }
            </div>
            <div><Outlet/></div>
        </div>
    );
};

