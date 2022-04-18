import React from 'react';
import {Link} from "react-router-dom";

import styles from './ButtonModule.css'

export const Button = ({to,state,children,...arg}) => {
    return (
        <Link to={to} state={state}>
                <button className={'but'} {...arg}>{children}</button>
        </Link>
    );
};

