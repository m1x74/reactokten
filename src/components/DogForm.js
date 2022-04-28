import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dogActions} from "../redux";

export const DogForm = () => {
    const {dogForUpdate}=useSelector(({dogs})=>dogs)
    const inputName = useRef();
    let dispatch = useDispatch();
    const [name, setName] = useState('');
    useEffect(() => {
    if (dogForUpdate){
        setName(dogForUpdate.name)
    }
    },[dogForUpdate])

    const save = () => {
      if (dogForUpdate){
          dispatch(dogActions.updateDog({name, id: dogForUpdate.id}))
      }else {
          dispatch(dogActions.addDog({name}))
      }
    }

    return (
        <div>
            <label>
                Dog Name: <input type="text"onChange={(e)=>setName(e.target.value)}
            value={name}/>
            </label>
            <button onClick={save}>{dogForUpdate?'Edit':'Create'}</button>
        </div>
    );
};

