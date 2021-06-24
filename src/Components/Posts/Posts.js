import Post from "../Post/Post";

export default function Posts({items, selectPost}) {
    // console.log(items)
    return (
        <div>
            {
                items.map(post => <Post key = {post.id} item={post} selectPost = {selectPost}/>)
            }
        </div>
    )
}
