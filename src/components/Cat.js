import React from 'react';
import {useDispatch} from "react-redux";
import {actionsCat} from "../redux";

export const Cat = ({cat}) => {

    let dispatch = useDispatch();
    return (
        <div>
            {cat.name}
            <button onClick={()=>dispatch(actionsCat.deleteCat({id: cat.id}))}>DELETE</button>
            <button onClick={()=>dispatch(actionsCat.setCatForUpdate({cat}))}>EDIT</button>
        </div>
    );
};

