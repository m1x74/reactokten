import React from 'react';

import styles from "./UserWithButModule.css"
import {Button} from "../Button/button";

export const User = ({user}) => {
    const {id,name}=user

    return (
        <div className={'userwithbut'}>
            <p>{user.id}. {user.name}</p>
            <Button state={user} to={id.toString()}>SHOW INFO</Button>
        </div>
    );
};

