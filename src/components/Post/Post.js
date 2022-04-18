import React from 'react';

export const Post = ({post}) => {
const {id,title}=post

    return (
        <div>
            {id}.{title}
        </div>
    );
};

