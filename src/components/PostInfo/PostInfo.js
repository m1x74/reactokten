import React from 'react';
import {Button} from "../Button/button";

export const PostInfo = ({post}) => {
    const {title, id, body, userId} = post
    return (
        <div>
            <div>UserId: {userId}</div>
            <hr/>
            <div>Id: {id}</div>
            <hr/>
            <div>Title: {title}</div>
            <hr/>
            <div>Body: {body}</div>
            <hr/>
            <Button to={`${id}`}>GET COMMENTS</Button>
        </div>
    );
};

