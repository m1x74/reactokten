import {useState} from "react";
import {Users} from "./components";
import styles from './App.module.css'

export const App = () => {
const [user,setUser]=useState(null);
const [userIdForPost,SetUserIdForPost]=useState(null)

    return(
        <div className={styles.usersname}>
            <div className={styles.but}><Users/></div>
        </div>
    )
}

export default App;
