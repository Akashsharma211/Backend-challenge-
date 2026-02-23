import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://ik.imagekit.io/nbqx5yvvv6/image_yJWhnt0TP.jpg?updatedAt=1771840040799",
      caption: "Water is life",
    }
  ])

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        if (res.data && res.data.posts) {
          setPosts(res.data.posts)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )}
    </section>
  )
}

export default Feed