import React from 'react';

export const Comments = ({comments}) => {
    const{postId,id,name,email,body}=comments

    return (
        <div>
                <div>PostId: {postId}</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
        </div>
    );
};

