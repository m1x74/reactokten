import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import postService from "../../services/post.service";
import {Post} from "../../components";

export const Postspage = () => {
    const [posts, setPosts] = useState([]);
    const {userId} = useParams()

    useEffect(() => {
        if (userId) {
            postService.getById(userId).then(({data}) => setPosts(data))
        } else {
            postService.getAll.then(({data}) => setPosts(data))
        }

    }, [userId])

    return (
        <div>
            <div>
                {
                   posts.map(post=><Post key={post.id} post={post}/>)
                }
            </div>
            <div><Outlet/></div>
        </div>
    );
};

