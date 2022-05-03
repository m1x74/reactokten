import React, {useEffect, useState} from 'react';

import {CarInfo} from "../../components";
import {useLocation, useParams} from "react-router-dom";
import {carService} from "../../services";


export const SingleCarPage = () => {
    const [car,setCar]=useState();
    const {state}=useLocation();
    const {carId}=useParams();
    useEffect(()=>{
        if (state){
            setCar(state)
        }else {
            carService.getById(carId).then(({data})=>setCar(data))
        }
    },[])

    return (
        <div>
            {car&&<CarInfo car={car}/>}
        </div>
    );
};

