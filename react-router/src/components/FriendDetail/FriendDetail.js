import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams()
    return (
        <div>
            <h3>This page is for details about my friend .</h3>
            <h2>His id is : {friendId}</h2>
        </div>
    );
};

export default FriendDetail;