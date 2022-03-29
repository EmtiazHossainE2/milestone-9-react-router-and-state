import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams()
    const [details, setDetails] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [postId])
    return (
        <div>
            <h2>This is post no : {postId} </h2>
            <h4>{details.title}</h4>
            <p>{details.body}</p>
            <button>Show more</button>
        </div>
    );
};

export default Post;