import Post from "../Post/Post";

const Posts = ({ posts }) => {
    return (
        <div className="posts-container">
            <Post/>
        {/* {posts.map((post) => (
            <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        ))} */}
        </div>
    );
}

export default Posts