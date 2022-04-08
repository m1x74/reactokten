import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {User} from "../User/user";


export const Users = ({setUser, SetUserIdForPost}) => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    },[])

    return (
        <div>
            {
                users ? users.map((user) => <User key={user.id} user={user} setUser={setUser}
                                                  SetUserIdForPost={SetUserIdForPost}/>): 'Wait'
            }
        </div>

    )
}