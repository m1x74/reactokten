import React from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../redux";

export const Dog = ({dog}) => {
    const {id,name}=dog;
    let dispatch = useDispatch();
    return (
        <div>
            {name}
            <button onClick={()=>dispatch(dogActions.deleteDog({id}))}>DELETE</button>
            <button onClick={()=>dispatch(dogActions.setDogForUpdate({dog}))}>UPDATE</button>
        </div>
    );
};

