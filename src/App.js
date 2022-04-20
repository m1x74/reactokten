import {useReducer, useState} from "react";
import styles from './App.css'

// const init = (initCount) => {
//     return{count1: initCount, count2: initCount, count3: initCount}
//
// }
// const reducer=(state,action)=>{
//     switch (action.type){
//         case 'inc':
//             return{...state,count1:state.count1+1}
//         case 'dec':
//             return{...state,count1:state.count1-1}
//         case 'res':
//             return{...state,count1:0}
//
//     }
//     switch (action.type){
//         case 'inc2':
//             return{...state,count2:state.count2+1}
//         case 'dec2':
//             return{...state,count2:state.count2-1}
//         case 'res2':
//             return{...state,count2:0}
//
//     }
//     switch (action.type){
//         case 'inc3':
//             return{...state,count3:state.count3+1}
//         case 'dec3':
//             return{...state,count3:state.count3-1}
//         case 'res3':
//             return{...state,count3:0}
//
//     }
//
//
// }

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload,id: Date.now()}]}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dogs => dogs.id !== payload)}

        default:
            console.error('error')
            return state

    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    const [catVal, setCats] = useState('');
    const [dogVal, setDogs] = useState('');
    const createCat = () => {
        dispatch({type: 'addCat', payload: catVal});
        setCats('')
    }
    const createDog = () => {
        dispatch({type: 'addDog', payload: dogVal});
        setCats('')
    }
    // const [state, dispatch] = useReducer(reducer, 0, init)//INCDEC
    return (
        <div>
            <div className={'flex'}>
                <div>
                    <label>Cat Name:<input type="text" onChange={({target}) => setCats(target.value)} value={catVal}/></label>
                    <button onClick={createCat}>ADD CAT</button>
                </div>

            <div>
                <label>Dog Name:<input type="text" onChange={({target}) => setDogs(target.value)} value={dogVal}/></label>
                <button onClick={createDog}>ADD DOG</button>
            </div>
            </div>
            <div className={'flex'}>
                <div>
                    {
                        state.cats.map(cat => (
                            <div key={cat.id}>
                                {cat.name}
                                <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete</button>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        state.dogs.map(dog => (
                            <div key={dog.id}>
                                {dog.name}
                                <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/*<div>*/}
            {/*    {state.count1}*/}
            {/*    <button onClick={() => dispatch({type: 'inc'})}>INC</button>*/}
            {/*    <button onClick={() => dispatch({type: 'dec'})}>DEC</button>*/}
            {/*    <button onClick={() => dispatch({type: 'res'})}>RES</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {state.count2}*/}
            {/*    <button onClick={() => dispatch({type: 'inc2'})}>INC</button>*/}
            {/*    <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>*/}
            {/*    <button onClick={() => dispatch({type: 'res2'})}>RES</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {state.count3}*/}
            {/*    <button onClick={() => dispatch({type: 'inc3'})}>INC</button>*/}
            {/*    <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>*/}
            {/*    <button onClick={() => dispatch({type: 'res3'})}>RES</button>*/}
            {/*</div>*/}
        </div>




    );
}

export default App;
