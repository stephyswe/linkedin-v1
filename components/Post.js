function Post({ post }) {
  return (
    <div key={post.id}>
      <img src={post.photoUrl} alt="" />
      <p>{post.input}</p>
    </div>
  )
}

export default Post
