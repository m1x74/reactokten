import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
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

const deleteById=createAsyncThunk(
    'deleteById',
    async ({id},{dispatch,rejectedWithValue})=>{
        try {
            await carServices.deleteById(id);
            dispatch(deleteCarById({id}));
        }catch (e) {
            return rejectedWithValue({status:e.message})
        }
    }
);
const updateById=createAsyncThunk(
    'updateById',
    async ({id,car},{dispatch,rejectedWithValue})=>{
        try {
            await carServices.updateById(id,car);
            dispatch(updateCarbyId({id,car}));
        }catch (e) {
            return rejectedWithValue({status:e.message})
        }
    }
);
const createAsync=createAsyncThunk(
    'create',
    async ({car},{dispatch,rejectedWithValue})=>{
        try {
            const{data}=await carServices.create(car);
            dispatch(create({car: data}))
        }catch (e) {
            rejectedWithValue({status:e.message,formErrors: e.response.data})
        }
    }
)




const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        create: (state,action)=>{
            state.cars.push(action.payload.car);
        },
        deleteCarById:(state,action)=>{
            const index=state.cars.findIndex(car=>car.id===action.payload.id);
            state.cars.splice(index,1)
        },
        updateCarbyId:(state,action)=>{
            const index=state.cars.findIndex(car=>car.id===action.payload.id);
            state.cars[index]={...state.cars[index],...action.payload.car};
            state.CarForUpdate=false;
        },
        setCarForUpdate:(state,action)=>{
            state.CarForUpdate=action.payload.car;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.status='completed';
                state.cars=action.payload;
                console.log(action.type);
            })
            .addCase(createAsync.fulfilled,(state, action) => {
                console.log('completed');
                console.log(action.type);
            })
            .addCase(createAsync.rejected,(state, action) => {
                const {status,formErrors}=action.payload;
                state.status=status;
                state.formErrors=formErrors;
                console.log(action.type)
            })

    }
});
const {reducer: carReducer,actions:{create,deleteCarById,updateCarbyId,setCarForUpdate}}=carSlice;
const carActions={
    getAll,
    deleteById,
    updateById,
    createAsync,
    setCarForUpdate
}
export {
    carReducer,
    carActions
}

