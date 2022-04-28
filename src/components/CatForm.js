import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionsCat} from "../redux";

export const CatForm = () => {
    const [name, setName] = useState('');
    const {catForUpdate} = useSelector(({cats}) => cats)
    let dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            setName(catForUpdate.name);
        }
    }, [catForUpdate]);
    const save = () => {
        if (catForUpdate) {
            dispatch(actionsCat.updateCat({name, id: catForUpdate.id}))
        } else {
            dispatch(actionsCat.addCat({name}))
        }
        setName('')
    }

    return (
        <div>
            <label>Cat: <input type="text"
            onChange={(e)=>setName(e.target.value)}
            value={name}/></label>
            <button onClick={save}>{catForUpdate?'Update':'Create'}</button>
        </div>
    );
};

