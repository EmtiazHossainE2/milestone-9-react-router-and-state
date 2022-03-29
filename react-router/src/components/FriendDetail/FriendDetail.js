import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [friendId])
    return (
        <div>
            <h3>This page is for details about my friend .</h3>
            <h2>His id is : {friendId}</h2>
            <h4>His name is {friend.name}</h4>
            <p>his email is {friend.email}</p>
            <p><small>his address is {friend.address?.city}</small></p>
            <p><small> zipcode is {friend.address?.zipcode}</small></p>
            <p><small>Lng is {friend.address?.geo?.lng}</small></p>

        </div>
    );
};

export default FriendDetail;