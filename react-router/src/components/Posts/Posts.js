import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 20)))
    }, [])
    return (
        <div>
            <h2>Nesting Route</h2>
            <h4>Total users post is : {posts.length}</h4>
            {
                posts.map(post => <Link
                    key={post.id}
                    to={`/posts/${post.id}`}
                > <button> {post.id} </button>  </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;