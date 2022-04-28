import React from 'react';
import {useSelector} from "react-redux";
import {Dog} from "./Dog";

export const Dogs = () => {
    const {dogs}=useSelector(({dogs})=>dogs)
    return (
        <div>
            {
                dogs.map(dog=><Dog key={dog.id} dog={dog}/>)
            }
        </div>
    );
};

