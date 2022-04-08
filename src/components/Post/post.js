export const Post = ({post}) => {
    return (
        <div>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    )

}