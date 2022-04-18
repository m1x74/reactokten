import React from 'react';
import {Button} from "../Button/button";

export const Post = ({post,flag}) => {
const {id,title}=post

    return (
        <div>
            <p>{id}.{title}</p>
            {
                flag && <Button to={`${id}`} state={post}>POST DETAILS</Button>
            }
        </div>
    );
};

