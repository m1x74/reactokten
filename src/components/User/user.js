import styles from '../../App.module.css';

export const User = ({user, setUser, SetUserIdForPost}) => {
    const click = () => {
        SetUserIdForPost(false);
        setUser(user);
    }
    return (
        <div>
            {user.id} {user.name}
            <button onClick={click} className={styles.but}>SHOW POST</button>
        </div>
    )
}