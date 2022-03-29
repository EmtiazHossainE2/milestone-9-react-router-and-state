import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend

    let navigate = useNavigate()
    const showFriendDetails = () => {
        let path = `/friend/${id}`
        navigate(path)
    }

    return (
        <div>
            <h3>My Friend name is {name}</h3>
            <button onClick={showFriendDetails}>{username} Id : {id}</button>
        </div>
    );
};

export default Friend;