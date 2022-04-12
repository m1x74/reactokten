export const Car = ({car,setCarForUpdate}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            <div>Id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>UPDATE CAR</button>
            <hr/>
        </div>
    )
}
