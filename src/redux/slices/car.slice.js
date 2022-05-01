import {createAsyncThunk} from "@reduxjs/toolkit";
import {carServices} from "../../services";

const initialState={
    cars: [],
    status:null,
    formErrors:{},
    CarForUpdate:null

}
const getAll=createAsyncThunk(
    'GetAll',
    async ()=>{
        const {data}=await carServices.getAll();
        return data
    }
);

const getById=createAsyncThunk(
    'GetById',
    async ()=>{
        const {data}=await carServices.getById(id);
        return data
    }
)