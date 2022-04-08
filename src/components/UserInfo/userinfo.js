import styles from '../../App.module.css';

export const Userinfo = ({user, SetUserIdForPost}) => {
    const clickpost = () => {
        SetUserIdForPost(user.id)
    }
    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.phone}</div>
            <div>{user.email}</div>
            <input type="button" value="SHOW POSTS" onClick={clickpost} className={styles.but}/>
        </div>
    )
}