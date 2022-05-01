import React from 'react';
import {useForm} from "react-hook-form";
import styles from './Module.css';

export const CarForm = () => {
    const {handleSubmit,reset,register,setValue}=useForm();







    return (
        <form className={'flex'} onSubmit={handleSubmit}>
            <div><label>Model:<input type="text"/></label></div>
            <div><label>Year:<input type="text"/></label></div>
            <div><label>Price:<input type="text"/></label></div>
            <button>SEND</button>
        </form>
    );
};

