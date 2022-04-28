import './App.css';
import {CatForm, Cats, DogForm, Dogs} from "./components";

export function App() {
    return (
        <div>
            <div className={'flex'}>
                <CatForm/>
                <DogForm/>
            </div>
            <div className={'flex'}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
}
