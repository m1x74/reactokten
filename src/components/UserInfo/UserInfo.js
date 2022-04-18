import React from 'react';

import {Button} from "../Button/button";

export const UserInfo = ({user}) => {
    const {id, name, username, email, phone, address, website} = user
    return (
        <div>
            <div>ID: {id}</div>
            <hr/>
            <div>Name: {name}</div>
            <hr/>
            <div>Username: {username}</div>
            <hr/>
            <div>Email: {email}</div>
            <hr/>
            <div>Phone: {phone}</div>
            <hr/>
            <div>City: {address.city}</div>
            <hr/>
            <div>Website: {website}</div>
            <hr/>
            <Button to={'post'}>GET POSTS</Button>
        </div>
    );
};

