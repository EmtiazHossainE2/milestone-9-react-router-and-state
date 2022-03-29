import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend

    let navigate = useNavigate()
    const showFriendDetails = () => {
        // let path = `/friend/${id}`
        navigate('/friend/' + id)
    }
    return (
        <div>
            <h3>My Friend name is {name}</h3>
            <button onClick={showFriendDetails}>{username} Id : {id}</button>
            <Link to={'/friend/' + id}> <button>{username} Id : {id}</button></Link>
        </div>
    );
};

export default Friend;