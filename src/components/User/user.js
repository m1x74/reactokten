export const User = ({user, setUser, SetUserIdForPost}) => {
    const click = () => {
        SetUserIdForPost(false);
        setUser(user)
    }
    return (
        <div>
            {user.id} {user.name}
            <button onClick={click}>SHOW POST</button>
        </div>
    )
}