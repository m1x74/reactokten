import {useState} from "react";

import {Posts, Userinfo, Users} from "./components";
import styles from './App.module.css'

export const App = () => {
    const [user, setUser] = useState(null);
    const [userIdForPost, SetUserIdForPost] = useState(null)

    return (
        <div>
            <div className={styles.usersname}>
                <div><Users setUser={setUser} SetUserIdForPost={SetUserIdForPost}/></div>
                <div>{user && <Userinfo user={user} SetUserIdForPost={SetUserIdForPost}/>}</div>
            </div>
            <div>
                {userIdForPost && <Posts userId={userIdForPost}/>}
            </div>
        </div>

    )
}

export default App;
