import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cats:[],
    catForUpdate:null
}
const catsSlices=createSlice({
    name:'catsSlice',
    initialState,
    reducers:{
        addCat:(state, action) => {
            const {name}=action.payload;
            const newCat={id:new Date().getTime(),name};
            state.cats.push(newCat);
        },
        deleteCat:(state, action) => {
            const {id}=action.payload;
            const index=state.cats.findIndex((cat)=>cat.id===id);
            state.cats.splice(index,1)
        },
        setCatForUpdate:(state, action) => {
            state.catForUpdate=action.payload.cat;
        },
        updateCat:(state, action) => {
            const {id,name}=action.payload;
            const index=state.cats.findIndex((cat)=>cat.id===id);
            state.cats[index].name=name;
            state.catForUpdate=false;
        }


}})

const {reducer,actions:{addCat,deleteCat,setCatForUpdate,updateCat}}=catsSlices;
export default reducer;
export const actionsCat={
    addCat,deleteCat,setCatForUpdate,updateCat
}